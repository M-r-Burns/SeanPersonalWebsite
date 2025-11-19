// ========================================
// WORLD MAP BACKGROUND DRAWING
// ========================================
// This file handles the interactive world map canvas background

class WorldMapCanvas {
  constructor() {
    this.canvas = document.getElementById('worldMap');
    if (!this.canvas) return;

    this.ctx = this.canvas.getContext('2d');
    this.locations = CONFIG.personal.locations;
    this.currentLocation = 'indianapolis';
    this.mapOffset = { x: 0, y: 0 };
    this.targetOffset = { x: 0, y: 0 };
    this.animationFrame = null;

    this.init();
  }

  init() {
    this.resize();
    window.addEventListener('resize', () => this.resize());
    this.draw();
    this.animate();
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.draw();
  }

  // Convert lat/lng to canvas coordinates
  latLngToCanvas(lat, lng) {
    const x = ((lng + 180) / 360) * this.canvas.width;
    const y = ((90 - lat) / 180) * this.canvas.height;
    return { x, y };
  }

  draw() {
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Apply map offset for panning
    ctx.save();
    ctx.translate(this.mapOffset.x, this.mapOffset.y);

    // Draw world map grid
    this.drawWorldGrid();

    // Draw continents outline (simplified)
    this.drawContinents();

    // Draw location markers
    this.drawLocationMarkers();

    ctx.restore();
  }

  drawWorldGrid() {
    const ctx = this.ctx;
    ctx.strokeStyle = 'rgba(255, 193, 7, 0.15)';
    ctx.lineWidth = 1;

    // Latitude lines
    for (let lat = -90; lat <= 90; lat += 15) {
      ctx.beginPath();
      const startPos = this.latLngToCanvas(lat, -180);
      const endPos = this.latLngToCanvas(lat, 180);
      ctx.moveTo(startPos.x, startPos.y);
      ctx.lineTo(endPos.x, endPos.y);
      ctx.stroke();
    }

    // Longitude lines
    for (let lng = -180; lng <= 180; lng += 15) {
      ctx.beginPath();
      const startPos = this.latLngToCanvas(90, lng);
      const endPos = this.latLngToCanvas(-90, lng);
      ctx.moveTo(startPos.x, startPos.y);
      ctx.lineTo(endPos.x, endPos.y);
      ctx.stroke();
    }
  }

  drawContinents() {
    const ctx = this.ctx;
    ctx.strokeStyle = 'rgba(255, 193, 7, 0.2)';
    ctx.lineWidth = 2;

    // Simplified continent outlines
    // North America
    this.drawContinent([
      { lat: 70, lng: -100 },
      { lat: 50, lng: -130 },
      { lat: 30, lng: -120 },
      { lat: 15, lng: -90 },
      { lat: 10, lng: -80 },
      { lat: 25, lng: -80 },
      { lat: 45, lng: -70 },
      { lat: 70, lng: -60 }
    ]);

    // South America
    this.drawContinent([
      { lat: 10, lng: -80 },
      { lat: -10, lng: -80 },
      { lat: -35, lng: -70 },
      { lat: -55, lng: -65 },
      { lat: -35, lng: -55 },
      { lat: -10, lng: -35 },
      { lat: 10, lng: -50 }
    ]);

    // Europe
    this.drawContinent([
      { lat: 70, lng: 10 },
      { lat: 60, lng: -10 },
      { lat: 35, lng: -10 },
      { lat: 35, lng: 40 },
      { lat: 70, lng: 40 }
    ]);

    // Africa
    this.drawContinent([
      { lat: 35, lng: -10 },
      { lat: 10, lng: -20 },
      { lat: -35, lng: 20 },
      { lat: -35, lng: 50 },
      { lat: 10, lng: 50 },
      { lat: 35, lng: 40 }
    ]);

    // Asia
    this.drawContinent([
      { lat: 70, lng: 40 },
      { lat: 70, lng: 180 },
      { lat: 10, lng: 140 },
      { lat: -10, lng: 110 },
      { lat: 10, lng: 50 },
      { lat: 35, lng: 40 }
    ]);

    // Australia
    this.drawContinent([
      { lat: -10, lng: 110 },
      { lat: -40, lng: 115 },
      { lat: -40, lng: 155 },
      { lat: -10, lng: 155 }
    ]);
  }

  drawContinent(points) {
    const ctx = this.ctx;
    ctx.beginPath();
    points.forEach((point, i) => {
      const pos = this.latLngToCanvas(point.lat, point.lng);
      if (i === 0) {
        ctx.moveTo(pos.x, pos.y);
      } else {
        ctx.lineTo(pos.x, pos.y);
      }
    });
    ctx.closePath();
    ctx.stroke();
  }

  drawLocationMarkers() {
    const ctx = this.ctx;

    Object.entries(this.locations).forEach(([key, location]) => {
      const pos = this.latLngToCanvas(location.lat, location.lng);

      // Marker circle
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, 6, 0, Math.PI * 2);
      ctx.fillStyle = key === this.currentLocation ? '#FFC107' : 'rgba(255, 193, 7, 0.5)';
      ctx.fill();

      // Pulse effect for current location
      if (key === this.currentLocation) {
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, 10, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(255, 193, 7, 0.3)';
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      // Label
      ctx.fillStyle = '#FFC107';
      ctx.font = '12px Poppins, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(location.label, pos.x, pos.y - 15);
    });
  }

  panTo(locationKey) {
    const location = this.locations[locationKey];
    if (!location) return;

    this.currentLocation = locationKey;
    const pos = this.latLngToCanvas(location.lat, location.lng);

    // Calculate offset to center the location
    this.targetOffset.x = this.canvas.width / 2 - pos.x;
    this.targetOffset.y = this.canvas.height / 2 - pos.y;
  }

  animate() {
    // Smooth transition to target offset
    this.mapOffset.x += (this.targetOffset.x - this.mapOffset.x) * 0.1;
    this.mapOffset.y += (this.targetOffset.y - this.mapOffset.y) * 0.1;

    this.draw();
    this.animationFrame = requestAnimationFrame(() => this.animate());
  }

  highlightRegion(region) {
    const overlay = document.getElementById('mapOverlay');
    if (!region) {
      overlay.classList.remove('highlight');
      return;
    }

    let x = 50, y = 50;

    // Determine region position
    switch (region) {
      case 'north-america':
        x = 25;
        y = 30;
        break;
      case 'europe':
        x = 55;
        y = 30;
        break;
      case 'asia':
        x = 75;
        y = 35;
        break;
      case 'global':
        x = 50;
        y = 50;
        break;
    }

    overlay.style.setProperty('--highlight-x', `${x}%`);
    overlay.style.setProperty('--highlight-y', `${y}%`);
    overlay.classList.add('highlight');

    // Auto-remove after 2 seconds
    setTimeout(() => {
      overlay.classList.remove('highlight');
    }, 2000);
  }

  destroy() {
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
    }
    window.removeEventListener('resize', () => this.resize());
  }
}

// Initialize map when DOM is loaded
let worldMap;
document.addEventListener('DOMContentLoaded', () => {
  worldMap = new WorldMapCanvas();
});
