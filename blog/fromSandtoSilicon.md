---
title: 'From Sand to Silicon'
date: '2025-05-18'
excerpt: 'A breakdown of the global semiconductor supply chain, from raw materials to your computer'
imageUrl: '/images/chipblog.jpg'
dataAiHint: 'Semiconductor/Chip supply chain'
---

# Introduction
The modern world runs on semiconductors, powering everything from smartphones to cars to supercomputers to your microwave(*note that for this report we will be mostly referencing high‑end chips however the process remains virtually the same for all types of semiconductors). Behind these advanced chips lies a highly intricate supply chain involving multiple specialized companies, cutting‑edge technology, and an enormous financial investment. From raw materials to final integration into devices, the journey of a semiconductor is a testament to global collaboration and engineering excellence. This report breaks down the semiconductor supply chain, explaining each stage of production and highlighting the companies that dominate this crucial industry.
# From Sand to Silicon: The Raw Materials Behind Chips
In the beginning, there was silica sand—a key raw material that, when reduced with carbon at high temperatures, produces metallurgical‑grade silicon while releasing carbon monoxide as a byproduct¹. Transforming silica into the ultra‑pure silicon required for semiconductors, however, involves a complex, multi‑step refining process. One widely used method is the Siemens process, where metallurgical‑grade silicon is reacted with chlorine to form trichlorosilane, which is then purified and decomposed on heated surfaces to yield extremely pure polycrystalline silicon². This high‑purity silicon is essential for manufacturing wafers with the precision needed in modern chip fabrication. As a semiconductor, silicon’s electrical conductivity can be enhanced by introducing impurities—such as phosphorus or boron—in a process known as “doping.” Moreover, being the second most abundant element in the Earth’s crust makes silicon both cost‑effective and readily available. The refined silicon is subsequently processed into ingots, which are thinly sliced into wafers and sent to manufacturers for further production³. While other minerals are also used in chip production, this overview focuses on silicon (the most important).
# The Role of Chip Design Companies
So now the manufacturers have the materials to make chips. However, we need to take a side step to another process that occurs in parallel. The manufacturers make the chips, but they don’t design them—they simply follow the instructions sent by other companies. This brings us to chip design companies like Nvidia, AMD, Broadcom, Apple (chip design is one part of Apple’s business), and others⁴. These companies use CAD software and other tools developed by firms like Cadence and Synopsys⁵ to design, test, and simulate chips. They do not produce or manufacture anything themselves. This allows chip design companies to maintain extremely high margins because they do not incur hardware production costs⁶. Once the designs are complete, they are sent to a chip manufacturer, known as a foundry, which fabricates (makes) prototypes and begins the production process. After testing and validation, large‑scale manufacturing begins.
# The Critical Role of Foundries in Semiconductor Manufacturing
These chip manufacturers, or foundries, are companies like Taiwan Semiconductor Manufacturing Company (TSMC) and Samsung (TSMC is the 10th largest company in the world by market cap). Among the 10 largest companies by market cap, 9 are tech companies, all of which have a chip designing side to their business (mostly for use within the business)—except for TSMC, which solely fabricates them. Additionally, 2 of these companies focus exclusively on chip design or fabrication: Nvidia and Broadcom. There are very few foundries in the world because the capital required to start and maintain a successful chip manufacturing company is extraordinarily high, and staying at the cutting edge of technology is critical to success⁷. This is why TSMC holds a dominant 65% share of the chip manufacturing market, followed by Samsung with 12%⁸. These two companies are the only ones with the capabilities to produce the most advanced chips, with TSMC leading at the cutting edge of semiconductor fabrication.
# ASML and the Machines That Make Modern Chips Possible
Now, in order to manufacture these chips, foundries must purchase specialized machines that are only produced by one company in the world: ASML (one of the 40 largest companies globally by market cap). These extreme ultraviolet (EUV) lithography machines cost between $350–$380 million⁹, are about the size of a bus, and require 40 freight containers, three cargo planes, and 20 trucks for shipping¹⁰.
# Photolithography: Etching Circuits at the Atomic Level
The process of making integrated circuits (the most important part of the chip) is called photolithography¹¹. This complex process uses chemicals and light to simultaneously pattern multiple integrated circuits (ICs) across the surface of the previously mentioned wafers¹². These wafers are then “diced” into individual pieces, each containing one IC, called a die¹³. Before dicing, these dies undergo testing to ensure they function correctly.
The semiconductor industry is divided into different types of companies based on their role in chip production. Some, like Intel, are Integrated Device Manufacturers (IDMs), meaning they design and manufacture their own chips in‑house. Others, like Nvidia and AMD, are “fabless” companies that focus solely on design and outsource manufacturing to specialized foundries. TSMC is the leading example of a "pure‑play foundry," meaning it only manufactures chips and does not design them. Samsung operates as both a foundry and an IDM, producing chips for itself and external clients.
Because chip fabrication is incredibly complex, Intel developed a method called **Copy Exactly!**, which involves replicating every detail of a successful process across all production sites, down to the brand of screws used¹⁴. This ensures consistency and minimizes errors, which is critical in semiconductor manufacturing. Many foundries strive for yield rates above 90% for different chips, as lower yields can indicate manufacturing inefficiencies. However, for cutting‑edge technologies, initial yields can start much lower—sometimes as low as 40%—before improving over time¹⁵¹⁶.
# Packaging: Preparing Chips for Final Use
After a die is made and verified to work, it undergoes packaging. This doesn't mean placing it in a box for shipping; rather, packaging is the process that combines the die with other components to enable electrical integration, allowing it to function in its intended environment (be it a computer, server room, etc.)¹⁷. This stage of manufacturing is handled by specialized packaging companies (ASE Technology Holding Co., Ltd., Amkor, Intel, etc.) or by foundries like TSMC. They use the design provided by the chip designer (such as Nvidia or AMD) and incorporate additional chips into the package to ensure proper functionality. For instance, Nvidia's final product in some of its designs includes more than just their proprietary chip; they designed a package that integrates SK Hynix’s DRAM chips in a stacked configuration, creating a high‑density memory solution known as High Bandwidth Memory (HBM)¹⁸. These chips are designed and fabricated by SK Hynix; however, the new generation of SK Hynix’s DRAM chips will be fabricated by TSMC¹⁹. These components are combined in a specially designed package by companies like TSMC, and the packaging process continues until the chip is fully operational.
After the packaging process is completed, the chip is ready to be shipped to the buyer (as it has often been purchased in advance). These buyers include companies like Microsoft, Meta, Amazon, etc., who utilize the chips for activities such as training AI models, integrating them into their computers, or building servers for data processing.
# The Global Semiconductor Supply Chain and Its Challenges
The chip‑making supply chain is an extremely complex process that requires cutting‑edge technology at nearly every step to meet the ever‑growing demands. Interestingly, the emergence of foundry‑only businesses like TSMC has enabled other chip designers to flourish, as they previously couldn't due to the massive upfront costs associated with building their own fabrication plants. This model has positioned TSMC to have a massive “moat” and hold a significant and growing share of the chip market. By aligning with the needs of the companies partnered with them, TSMC has become a leader in the chip fabrication process, attracting more business and generating the revenue necessary to maintain this position. As competitors fall behind, TSMC becomes the only realistic option for producing high‑end chips, further solidifying its dominance. The substantial barriers to entry—encompassing financial investment, skilled personnel, specialized knowledge, established processes, and partnerships with suppliers, machine manufacturers, and chip design companies—make it exceedingly difficult for new entrants to compete. The chip industry has received trillions of dollars in investment and serves as the backbone of modern technology. Without chip production, the economy falters, as new machines, technology, cars, and virtually everything else rely on chips²⁰.
As the demand for more powerful and efficient chips continues to grow, the semiconductor supply chain will face increasing pressure to innovate and optimize production. Emerging trends such as advanced packaging, AI‑driven chip design, and geopolitical shifts in semiconductor manufacturing will further shape the industry. While TSMC remains the dominant player, government investments and new competitors could alter the landscape in the coming decades. However, for now, the immense capital and expertise required to compete ensure that only a select few companies can lead the way. The semiconductor supply chain is not just a manufacturing process—it is the foundation of modern technology and the key to future advancements.



### Sources
1. semiengineering.com


2. sciencedirect.com


3. asml.com


4. companiesmarketcap.com


5. wing.vc


6. investopedia.com


7. acquired.fm


8. counterpointresearch.com


9. datacenterdynamics.com


10. wired.com


11. blackridgeresearch.com


12. mirai-intex.com


13. wevolver.com


14. intel.com


15. technode.com


16. infosys.com


17. ansys.com


18. skhynix.com


19. trendforce.com


20. acquired.fm





