import { useState } from 'react';
import {
  ShieldCheck,
  Award,
  FileCheck,
  Sliders,
  CheckCircle,
  Search,
  Scale,
  Eye,
  ArrowRight
} from 'lucide-react';

// Reuse graphics from assets
import aboutInt1 from '../assets/about_int1.png';

interface QualityPageProps {
  setCurrentPage: (page: 'home' | 'about' | 'products' | 'infrastructure' | 'quality') => void;
}

export default function QualityPage({ setCurrentPage }: QualityPageProps) {
  const [activeStep, setActiveStep] = useState<number>(0);

  const qcSteps = [
    {
      id: 0,
      phase: "Phase 01",
      title: "Raw Material Inspection (IQC)",
      desc: "Incoming brass rods, copper bars, and steel wire rolls are audited for metallurgical composition and dimension sizing before production approval. Material Test Certificates (MTC) are logged for full traceability.",
      icon: <Scale className="w-5 h-5 text-brand-blue" />
    },
    {
      id: 1,
      phase: "Phase 02",
      title: "In-Process Checks (IPQC)",
      desc: "Our machine operators and patrol inspectors run detailed periodic dimension inspections at the cold heading and thread rolling stages. Strict ±0.02mm tolerances are verified using calibrated digital micrometers.",
      icon: <Sliders className="w-5 h-5 text-brand-blue" />
    },
    {
      id: 2,
      phase: "Phase 03",
      title: "Finishing & Plating Audit",
      desc: "Following surface electroplating (nickel, tin, or zinc), parts undergo chemical tests and electromagnetic measurements to verify coating thicknesses and salt spray resistance limits.",
      icon: <Search className="w-5 h-5 text-brand-blue" />
    },
    {
      id: 3,
      phase: "Phase 04",
      title: "Final Inspection & Dispatch (FQC)",
      desc: "Every finished batch is sample-tested according to strict AQL (Acceptable Quality Limit) levels for functional performance and cosmetic compliance before secure double-wall transit packaging is sealed.",
      icon: <FileCheck className="w-5 h-5 text-brand-blue" />
    }
  ];

  const testingEquipment = [
    {
      icon: <Sliders className="w-8 h-8 text-brand-blue" />,
      title: "Universal Tensile Tester",
      desc: "Verifies the ultimate tensile strength and mechanical stress thresholds of copper components and high-tensile screws to ensure zero failure under structural load."
    },
    {
      icon: <Eye className="w-8 h-8 text-brand-blue" />,
      title: "Profile Projector",
      desc: "Utilizes 2D optical magnification to inspect intricate thread geometries and component profiles against design blueprints with high accuracy."
    },
    {
      icon: <Award className="w-8 h-8 text-brand-blue" />,
      title: "Digital Hardness Tester",
      desc: "Measures Rockwell/Vickers hardness values on raw wire and forged products to confirm correct heat treatment and structural toughness."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-brand-blue" />,
      title: "Coating Thickness Gauge",
      desc: "Uses electromagnetic principles to audit micro-level plating thickness of nickel, tin, or chrome finishes, assuring long-term corrosion resistance."
    }
  ];

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
              Quality Excellence
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
              <span className="text-white">Quality Assurance</span>
            </div>
          </div>

          {/* Right Side: Watermark Shield Icon */}
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
              {/* Shield outline */}
              <path d="M12 22 L50 10 L88 22 C88 50, 75 75, 50 90 C25 75, 12 50, 12 22 Z" />
              {/* Internal Checkmark */}
              <path d="M35 50 L47 62 L65 38" />
            </svg>
          </div>
        </div>

        {/* Diagonal border layout decoration at the bottom */}
        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-brand-yellow"></div>
      </section>

      {/* Quality Policy Statement */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Column: text content */}
            <div className="lg:col-span-7 text-left font-sans">
              <span className="text-brand-blue font-bold text-xs tracking-wider uppercase bg-[#E6F5FC] px-4 py-1.5 rounded-lg mb-6 inline-block">
                ISO 9001:2015 Certified
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-dark tracking-tight mb-6">
                Our Commitment to Zero-Defect Standards
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                At Shree Industries, quality is not a final checkpoint; it is a core discipline embedded within every step of our manufacturing operations. From sorting brass alloys to thread rolling and secure shipment packing, we follow rigorous control steps to ensure consistency.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed mb-8">
                We operate under an ISO 9001:2015 certified Quality Management System. Our engineers continuously audit mechanical tolerances, thermal resistance limits, and structural tensile values to ensure our products exceed local and international industrial standards.
              </p>

              {/* Pillars List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-slate-100 pt-8">
                <div className="flex gap-3 items-start">
                  <CheckCircle className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-brand-dark mb-1">100% Traceability</h4>
                    <p className="text-xs text-slate-500">Every batch is tracked back to its original raw material heat number.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <CheckCircle className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-brand-dark mb-1">Calibrated Instruments</h4>
                    <p className="text-xs text-slate-500">All gauges are checked periodically against national accreditation limits.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Graphic Image */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-blue to-blue-600 rounded-[2.5rem] transform translate-x-3 translate-y-3 rotate-1 opacity-20"></div>
              <div className="relative border border-slate-200 bg-white p-3 rounded-[2.5rem] shadow-xl overflow-hidden">
                <img
                  src={aboutInt1}
                  alt="Quality verification check"
                  className="w-full h-80 object-cover rounded-[2rem] hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* QC Process Timeline Section */}
      <section className="py-16 bg-slate-50/50 border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-sans">

          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-brand-blue font-bold text-xs tracking-wider uppercase bg-[#E6F5FC] px-4 py-1.5 rounded-lg mb-4 inline-block">
              Stage Audit
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-dark tracking-tight">
              Our 4-Stage Quality Control Flow
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-4 leading-relaxed">
              We monitor manufacturing stages carefully to minimize defect rates and guarantee absolute physical reliability.
            </p>
          </div>

          {/* Interactive Steps Grid & Display */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

            {/* Left side: interactive step selector */}
            <div className="lg:col-span-5 space-y-4">
              {qcSteps.map((step) => (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex gap-4 items-center outline-none cursor-pointer ${activeStep === step.id
                      ? 'bg-white border-brand-blue shadow-lg -translate-x-1 sm:-translate-x-2'
                      : 'bg-transparent border-slate-200 hover:bg-white hover:border-slate-300'
                    }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${activeStep === step.id ? 'bg-[#E6F5FC] text-brand-blue' : 'bg-slate-200/50 text-slate-500'
                    }`}>
                    {step.icon}
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#009DE1]">
                      {step.phase}
                    </span>
                    <h4 className="text-xs sm:text-sm font-bold text-brand-dark mt-0.5">
                      {step.title}
                    </h4>
                  </div>
                </button>
              ))}
            </div>

            {/* Right side: step detailed description display */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-slate-100 shadow-md text-left flex flex-col justify-between h-full min-h-[300px]">
              <div>
                <span className="text-xs font-bold text-brand-blue tracking-wide uppercase">
                  {qcSteps[activeStep].phase} Details
                </span>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-brand-dark mt-2 mb-5">
                  {qcSteps[activeStep].title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {qcSteps[activeStep].desc}
                </p>
              </div>

              {/* Small list block on current QC values */}
              <div className="mt-8 border-t border-slate-100 pt-6">
                <div className="flex flex-wrap gap-4 text-xs text-slate-500 font-semibold">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-brand-blue" />
                    Strict Tolerances
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-brand-blue" />
                    logged verification reports
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-brand-blue" />
                    Certified operators
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Testing Equipment Showcase */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-sans">

          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-brand-blue font-bold text-xs tracking-wider uppercase bg-[#E6F5FC] px-4 py-1.5 rounded-lg mb-4 inline-block">
              Testing Lab Tooling
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-dark tracking-tight">
              In-House Laboratory & Metrology Tooling
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-4 leading-relaxed">
              We deploy advanced verification equipment to execute strict stress, dimension, and coating thickness audits.
            </p>
          </div>

          {/* Equipment Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {testingEquipment.map((eq, idx) => (
              <div
                key={idx}
                className="bg-[#fafafa] p-6 rounded-2xl border border-slate-100 hover:border-brand-blue/30 hover:bg-white shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center shadow-sm mb-5 group-hover:scale-110 transition-transform duration-300">
                  {eq.icon}
                </div>
                <h3 className="text-sm sm:text-base font-bold text-brand-dark mb-2.5 group-hover:text-brand-blue transition-colors">
                  {eq.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {eq.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Quote / Certification Call-to-Action */}
      <section className="py-16 bg-gradient-to-r from-brand-dark to-slate-900 text-white text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-blue/10 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-yellow/5 rounded-full blur-[120px] -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 relative z-10 font-sans">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white tracking-tight">
            High Precision Components Built to Blueprints
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto mb-8 leading-relaxed">
            Our quality control lab supports custom specifications audit, logging dedicated chemical analysis and mechanical tolerance parameters for clients.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-brand-yellow text-brand-dark font-extrabold text-xs sm:text-sm px-8 py-3.5 rounded-xl hover:bg-yellow-500 hover:-translate-y-0.5 transition-all duration-300 uppercase tracking-wider shadow-lg shadow-brand-yellow/10"
            >
              Contact Engineering
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
