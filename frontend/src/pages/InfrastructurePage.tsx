import { useState } from 'react';
import {
  Factory,
  Cpu,
  ShieldCheck,
  Warehouse,
  Wrench,
  Zap,
  Gauge,
  Activity,
  Layers,
  ArrowRight,
  ClipboardCheck
} from 'lucide-react';

// Import assets to reuse existing graphics
import aboutMain from '../assets/about_main.png';
import aboutInt1 from '../assets/about_int1.png';
import aboutInt2 from '../assets/about_int2.png';
import aboutManufacturing from '../assets/about_manufacturing_worker.png';
import workplaceCollaboration from '../assets/workplace_collaboration.png';

interface InfrastructurePageProps {
  setCurrentPage: (page: 'home' | 'about' | 'products' | 'infrastructure') => void;
}

export default function InfrastructurePage({ setCurrentPage }: InfrastructurePageProps) {
  const [activeTab, setActiveTab] = useState<'manufacturing' | 'machinery' | 'testing' | 'logistics'>('manufacturing');

  const facilityHighlights = [
    {
      icon: <Factory className="w-6 h-6 text-brand-blue" />,
      title: "50,000+ Sq. Ft. Plant",
      desc: "Our modern industrial facility based in Rajkot, Gujarat is structurally organized to support linear production flow and minimize processing bottlenecks."
    },
    {
      icon: <Cpu className="w-6 h-6 text-brand-blue" />,
      title: "Advanced Automation",
      desc: "Integrated with semi-automatic and automatic assembly lines, ensuring consistent dimensional accuracy and high-volume outputs."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-brand-blue" />,
      title: "ISO 9001:2015 Standards",
      desc: "Every sector of our manufacturing floor operates under strict quality management systems (QMS), enforcing traceabilities and clean workspace layouts."
    },
    {
      icon: <Warehouse className="w-6 h-6 text-brand-blue" />,
      title: "High-Capacity Storage",
      desc: "Our modern storage systems allow us to maintain a steady inventory of raw material and finished products, facilitating rapid dispatches."
    }
  ];

  const tabsContent = {
    manufacturing: {
      title: "State-of-the-Art Manufacturing Plant",
      subtitle: "Engineered for high-volume precision manufacturing",
      description: "Our plant is designed on lean manufacturing principles. We utilize modern machine arrangements, ergonomic workstations, and direct material flow channels that optimize production cycling times. Special emphasis is placed on safety, lighting, and ventilation to create an optimal industrial working environment.",
      image: aboutManufacturing,
      bullets: [
        "Dedicated copper and brass forming units to prevent cross-material contamination.",
        "Equipped with emergency-safety systems and backup power grids for 24/7 operations.",
        "Overhead cranes and conveyor systems to facilitate heavy material movement.",
        "Eco-friendly waste-management channels for sorting scrap and recycling metal shavings."
      ]
    },
    machinery: {
      title: "Machinery & Technical Setup",
      subtitle: "High-speed cold heading and automated thread rolling",
      description: "We invest in high-performance industrial machinery to maintain exceptional tolerances. Our precision machine shop features multi-station cold heading machines, high-speed automated thread rollers, slotting lines, and automated packaging equipment. This tooling allows us to deliver high volumes with zero structural compromises.",
      image: aboutMain,
      bullets: [
        "Multi-station cold headers capable of forming complex screw and terminal geometries.",
        "High-precision automated thread rolling lines for uniform thread patterns.",
        "Automated slotting and deburring units for perfect screw heads.",
        "Dedicated preventive maintenance schedules to minimize tool wear and machine downtime."
      ]
    },
    testing: {
      title: "Advanced In-House Quality Testing Lab",
      subtitle: "Rigorous verification of mechanical and thermal limits",
      description: "Quality is engineered directly into our process. Our dedicated laboratory features specialized instruments to calibrate, stress-test, and verify material limits. We run detailed tests on tensile strength, hardness, coating thickness, and dimension specifications, ensuring every batch matches strict compliance values before release.",
      image: aboutInt1,
      bullets: [
        "Tensile strength testing machine to verify mechanical stress capacities.",
        "Digital micro-hardness testers for alloy and plating durability analysis.",
        "Coating thickness gauge utilizing magnetic and eddy-current detection.",
        "Fully calibrated profile projectors and digital micrometers for absolute precision."
      ]
    },
    logistics: {
      title: "Logistics, Warehousing & Tool Room",
      subtitle: "Seamless inventory controls and custom tooling design",
      description: "Our warehouse system tracks raw material inputs to finished goods ready for transit. With barcode integration and direct freight alignments, we process shipments efficiently. Additionally, our high-tech in-house tool room houses CAD/CAM centers enabling custom design modifications and rapid prototyping for specialized client requests.",
      image: workplaceCollaboration,
      bullets: [
        "Digital inventory tracking to monitor raw materials, work-in-progress, and finished goods.",
        "Custom, double-walled corrugated transit packaging protecting products from damage.",
        "Fully equipped tool room with EDM and grinding machines for custom die-making.",
        "Direct highway connectivity and alliances with top-tier international freight lines."
      ]
    }
  };

  const currentTab = tabsContent[activeTab];

  return (
    <div className="w-full flex flex-col bg-white">
      {/* Inner Banner Section with brand blue theme gradient background */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-r from-[#009DE1] via-[#006FA0] to-[#003E5C] overflow-hidden flex items-center">

        {/* Soft radial overlay glow matching top-left corner light */}
        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-white/10 rounded-full blur-[80px] -translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-between items-center relative z-10">
          {/* Left Side: Title & Breadcrumbs */}
          <div className="text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight font-sans">
              Our Infrastructure
            </h1>

            {/* Breadcrumb links */}
            <div className="text-white/80 text-xs sm:text-sm font-semibold tracking-wider mt-3 flex items-center gap-2">
              <button
                onClick={() => setCurrentPage('home')}
                className="hover:text-white transition-colors cursor-pointer outline-none"
              >
                Home
              </button>
              <span className="text-white/40">/</span>
              <span className="text-white">Our Infrastructure</span>
            </div>
          </div>

          {/* Right Side: Watermark Factory/Gears Icon */}
          <div className="hidden md:block select-none pointer-events-none transform translate-x-4">
            <svg
              className="w-48 h-48 lg:w-56 lg:h-56 text-white opacity-[0.09]"
              viewBox="0 0 100 100"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Factory Building Outline */}
              <path d="M10 80 L10 40 L35 55 L35 40 L60 55 L60 30 L85 45 L85 80 Z" />
              {/* Ground line */}
              <line x1="5" y1="80" x2="95" y2="80" />
              {/* Factory Chimney */}
              <rect x="73" y="18" width="8" height="27" />
              <path d="M71 18 L83 18" />
              {/* Smoke puff */}
              <circle cx="77" cy="10" r="3" />
              <circle cx="81" cy="6" r="2" />
              {/* Gears inside to signify technical manufacturing */}
              <circle cx="45" cy="68" r="7" />
              <circle cx="25" cy="68" r="5" />
            </svg>
          </div>
        </div>

        {/* Diagonal border layout decoration at the bottom */}
        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-brand-yellow"></div>
      </section>

      {/* Overview / Introduction Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Text Content */}
            <div className="lg:col-span-7 text-left">
              <span className="text-brand-blue font-bold text-xs tracking-wider uppercase bg-[#E6F5FC] px-4 py-1.5 rounded-lg mb-6 inline-block font-sans">
                Manufacturing Base
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-dark tracking-tight mb-6 font-sans">
                World-Class Plant & Manufacturing Facilities
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed mb-6 font-sans">
                Shree Industries takes pride in operating a robust and modern manufacturing unit in the heart of Rajkot, Gujarat. Built over a sprawling layout, our infrastructure represents a strategic blend of high-caliber engineering, cutting-edge machinery, and dedicated labor safety systems.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed mb-8 font-sans">
                Through optimized process flows, we ensure that raw materials like brass rods, copper bars, and steel wire rolls are converted into certified electrical products with precision. Our integrated operations allow us to scale production sizes rapidly to meet local and export demands seamlessly.
              </p>

              <div className="grid grid-cols-2 gap-4 sm:gap-6 border-t border-slate-100 pt-8 font-sans">
                <div>
                  <h4 className="text-3xl font-extrabold text-brand-blue mb-1">50k+</h4>
                  <p className="text-xs text-slate-500 font-medium">Sq. Ft. Built-up Area</p>
                </div>
                <div>
                  <h4 className="text-3xl font-extrabold text-brand-blue mb-1">100+</h4>
                  <p className="text-xs text-slate-500 font-medium">Advanced Automated Machines</p>
                </div>
              </div>
            </div>

            {/* Right Column: High Quality Graphic Image with overlapping border */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-blue to-blue-600 rounded-[2.5rem] transform translate-x-3 translate-y-3 -rotate-1 opacity-20"></div>
              <div className="relative border border-slate-200 bg-white p-3 rounded-[2.5rem] shadow-xl overflow-hidden">
                <img
                  src={aboutInt2}
                  alt="Industrial manufacturing floor"
                  className="w-full h-80 object-cover rounded-[2rem] hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-brand-yellow text-brand-dark font-extrabold p-5 rounded-2xl shadow-lg border border-yellow-400 hidden sm:block max-w-[180px] font-sans">
                <p className="text-xl">ISO 9001</p>
                <p className="text-[10px] text-brand-dark/80 font-semibold uppercase tracking-wider mt-1">Certified Quality QMS</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid Highlights Cards */}
      <section className="py-12 bg-slate-50/50 border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-sans">
            {facilityHighlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-brand-blue/30 shadow-sm hover:shadow-lg transition-all duration-300 group text-left"
              >
                <div className="w-12 h-12 rounded-xl bg-[#E6F5FC] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  {highlight.icon}
                </div>
                <h3 className="text-base font-bold text-brand-dark mb-2.5 group-hover:text-brand-blue transition-colors">
                  {highlight.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {highlight.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Tabs Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-sans">

          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-brand-blue font-bold text-xs tracking-wider uppercase bg-[#E6F5FC] px-4 py-1.5 rounded-lg mb-4 inline-block">
              Sectional Details
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-dark tracking-tight">
              Explore Our Industrial Capabilities
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-4 leading-relaxed">
              Click through the tabs below to explore the detailed divisions and infrastructure systems that keep our manufacturing processes running smoothly.
            </p>
          </div>

          {/* Custom Tabs Navigation */}
          <div className="grid grid-cols-2 md:flex md:flex-wrap md:justify-center gap-2 sm:gap-3 mb-12 border-b border-slate-100 pb-6">
            {[
              { id: 'manufacturing', label: 'Manufacturing Unit', icon: <Factory className="w-4 h-4" /> },
              { id: 'machinery', label: 'Machinery Setup', icon: <Wrench className="w-4 h-4" /> },
              { id: 'testing', label: 'Quality Lab', icon: <ClipboardCheck className="w-4 h-4" /> },
              { id: 'logistics', label: 'Logistics & Design', icon: <Warehouse className="w-4 h-4" /> },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center justify-center gap-2 px-3 sm:px-5 py-3 rounded-xl text-[10px] sm:text-xs md:text-sm font-bold tracking-wide transition-all cursor-pointer outline-none border w-full md:w-auto ${activeTab === tab.id
                    ? 'bg-brand-blue text-white border-brand-blue shadow-md shadow-brand-blue/10 -translate-y-0.5'
                    : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:text-brand-blue'
                  }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Active Tab Panel */}
          <div className="bg-slate-50/30 border border-slate-100 rounded-3xl p-6 sm:p-10 transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

              {/* Tab Text Content */}
              <div className="lg:col-span-7 text-left order-2 lg:order-1">
                <span className="text-xs font-bold text-brand-blue tracking-wide uppercase">
                  {currentTab.subtitle}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-brand-dark mt-2 mb-4">
                  {currentTab.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {currentTab.description}
                </p>

                {/* Bullets List */}
                <ul className="space-y-3">
                  {currentTab.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-brand-blue/10 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-blue"></span>
                      </div>
                      <span className="text-xs sm:text-sm text-slate-600">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tab Image Graphic */}
              <div className="lg:col-span-5 order-1 lg:order-2">
                <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200/50 bg-white p-2">
                  <img
                    src={currentTab.image}
                    alt={currentTab.title}
                    className="w-full h-64 sm:h-72 object-cover rounded-xl"
                  />
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Technology Focus & Technical Parameters */}
      <section className="py-16 sm:py-24 bg-slate-50/50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-sans">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left side: parameters metrics */}
            <div className="lg:col-span-6 order-2 lg:order-1 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                <div className="text-brand-blue mb-4">
                  <Gauge className="w-8 h-8" />
                </div>
                <h4 className="text-sm font-bold text-brand-dark mb-1">Cold Heading Precision</h4>
                <p className="text-xs text-slate-500 leading-relaxed">Multi-station forming tools providing accurate dimensions within ±0.02mm.</p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                <div className="text-brand-blue mb-4">
                  <Activity className="w-8 h-8" />
                </div>
                <h4 className="text-sm font-bold text-brand-dark mb-1">High-Speed Output</h4>
                <p className="text-xs text-slate-500 leading-relaxed">Thread rolling speeds reaching 150 parts per minute for large scale orders.</p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                <div className="text-brand-blue mb-4">
                  <Layers className="w-8 h-8" />
                </div>
                <h4 className="text-sm font-bold text-brand-dark mb-1">Custom Platings</h4>
                <p className="text-xs text-slate-500 leading-relaxed">Electrolytic nickel, chrome, copper, and tin plating configurations available.</p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                <div className="text-brand-blue mb-4">
                  <Zap className="w-8 h-8" />
                </div>
                <h4 className="text-sm font-bold text-brand-dark mb-1">Energy Optimized</h4>
                <p className="text-xs text-slate-500 leading-relaxed">Plant operation synchronized with power capacitors to maintain zero-loss grid setups.</p>
              </div>
            </div>

            {/* Right side: text block */}
            <div className="lg:col-span-6 order-1 lg:order-2 text-left flex flex-col justify-center">
              <span className="self-start text-[#009DE1] font-bold text-xs tracking-wider uppercase bg-[#E6F5FC] px-4 py-1.5 rounded-lg mb-6">
                Technical Highlights
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-dark tracking-tight mb-6">
                Our Technology Core & Operations Parameters
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed mb-6 font-sans">
                Shree Industries remains dedicated to regular machinery updates and technical scaling. We believe that state-of-the-art engineering is the absolute cornerstone of zero-defect products.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed mb-8 font-sans">
                By maintaining detailed calibrations on machines, employing specialized tooling engineers, and scheduling active quality runs, we assure high consistency in switchboard hardware and custom industrial fasteners.
              </p>

              <div>
                <button
                  onClick={() => setCurrentPage('products')}
                  className="inline-flex items-center gap-2 bg-brand-blue text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl hover:bg-brand-blue/90 hover:-translate-y-0.5 transition-all duration-300 uppercase tracking-wider cursor-pointer outline-none shadow-md shadow-brand-blue/10"
                >
                  View Product Catalog
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Call to Action (Get a Quote redirect link) */}
      <section className="py-16 bg-gradient-to-r from-brand-dark to-slate-900 text-white text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-blue/10 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-yellow/5 rounded-full blur-[120px] -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 relative z-10 font-sans">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white tracking-tight">
            Need Custom Fasteners or Electrical Components?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto mb-8 leading-relaxed">
            Our infrastructure supports custom manufacturing based on client blueprints. Get in touch with our engineering team for specifications and quotation.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-brand-yellow text-brand-dark font-extrabold text-xs sm:text-sm px-8 py-3.5 rounded-xl hover:bg-yellow-500 hover:-translate-y-0.5 transition-all duration-300 uppercase tracking-wider shadow-lg shadow-brand-yellow/10"
            >
              Get In Touch
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
