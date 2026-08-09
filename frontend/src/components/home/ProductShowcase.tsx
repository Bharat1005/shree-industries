import { useState } from 'react';
import { Mail, X, CheckCircle, ArrowRight } from 'lucide-react';

// Import local assets
import prodImg1 from '../../assets/extracted_catalog_images/prod_img_1.png';
import prodImg2 from '../../assets/extracted_catalog_images/prod_img_2.png';
import prodImg3 from '../../assets/extracted_catalog_images/prod_img_3.png';
import prodImg4 from '../../assets/extracted_catalog_images/prod_img_4.png';
import prodImg5 from '../../assets/extracted_catalog_images/prod_img_5.png';
import prodImg6 from '../../assets/extracted_catalog_images/prod_img_6.png';
import prodImg7 from '../../assets/extracted_catalog_images/prod_img_7.png';
import prodImg8 from '../../assets/extracted_catalog_images/prod_img_8.png';
import prodImg9 from '../../assets/extracted_catalog_images/prod_img_9.png';
import prodImg10 from '../../assets/extracted_catalog_images/prod_img_10.png';
import prodImg11 from '../../assets/extracted_catalog_images/prod_img_11.png';
import prodImg12 from '../../assets/extracted_catalog_images/prod_img_12.png';
import prodImg13 from '../../assets/extracted_catalog_images/prod_img_13.png';
import prodImg14 from '../../assets/extracted_catalog_images/prod_img_14.png';
import prodImg15 from '../../assets/extracted_catalog_images/prod_img_15.png';
import prodImg16 from '../../assets/extracted_catalog_images/prod_img_16.png';
import prodImg17 from '../../assets/extracted_catalog_images/prod_img_17.png';
import prodImg18 from '../../assets/extracted_catalog_images/prod_img_18.png';
import prodImg19 from '../../assets/extracted_catalog_images/prod_img_19.png';
import prodImg20 from '../../assets/extracted_catalog_images/prod_img_20.png';
import prodImg21 from '../../assets/extracted_catalog_images/prod_img_21.png';
import prodImg22 from '../../assets/extracted_catalog_images/prod_img_22.png';
import prodImg23 from '../../assets/extracted_catalog_images/prod_img_23.png';
import prodImg24 from '../../assets/extracted_catalog_images/prod_img_24.png';
import prodImg25 from '../../assets/extracted_catalog_images/prod_img_25.png';
import prodImg26 from '../../assets/extracted_catalog_images/prod_img_26.png';
import prodImg27 from '../../assets/extracted_catalog_images/prod_img_27.png';
import prodImg28 from '../../assets/extracted_catalog_images/prod_img_28.png';
import prodImg29 from '../../assets/extracted_catalog_images/prod_img_29.png';
import prodImg30 from '../../assets/extracted_catalog_images/prod_img_30.png';
import prodImg31 from '../../assets/extracted_catalog_images/prod_img_31.png';
import prodImg32 from '../../assets/extracted_catalog_images/prod_img_32.png';
import prodImg33 from '../../assets/extracted_catalog_images/prod_img_33.png';
import prodImg34 from '../../assets/extracted_catalog_images/prod_img_34.png';
import prodImg35 from '../../assets/extracted_catalog_images/prod_img_35.png';
import prodImg36 from '../../assets/extracted_catalog_images/prod_img_36.png';
import prodImg37 from '../../assets/extracted_catalog_images/prod_img_37.png';
import prodImg38 from '../../assets/extracted_catalog_images/prod_img_38.png';
import prodImg39 from '../../assets/extracted_catalog_images/prod_img_39.png';
import prodImg40 from '../../assets/extracted_catalog_images/prod_img_40.png';
import prodImg41 from '../../assets/extracted_catalog_images/prod_img_41.png';
import prodImg42 from '../../assets/extracted_catalog_images/prod_img_42.png';
import prodImg43 from '../../assets/extracted_catalog_images/prod_img_43.png';
import prodImg44 from '../../assets/extracted_catalog_images/prod_img_44.png';
import prodImg45 from '../../assets/extracted_catalog_images/prod_img_45.png';
import prodImg46 from '../../assets/extracted_catalog_images/prod_img_46.png';
import prodImg47 from '../../assets/extracted_catalog_images/prod_img_47.png';
import prodImg48 from '../../assets/extracted_catalog_images/prod_img_48.png';
import prodImg49 from '../../assets/extracted_catalog_images/prod_img_49.png';
import prodImg50 from '../../assets/extracted_catalog_images/prod_img_50.png';
import prodImg51 from '../../assets/extracted_catalog_images/prod_img_51.png';
import prodImg52 from '../../assets/extracted_catalog_images/prod_img_52.png';
import prodImg53 from '../../assets/extracted_catalog_images/prod_img_53.png';
import prodImg54 from '../../assets/extracted_catalog_images/prod_img_54.png';
import prodImg55 from '../../assets/extracted_catalog_images/prod_img_55.png';
import prodImg56 from '../../assets/extracted_catalog_images/prod_img_56.png';
import prodImg57 from '../../assets/extracted_catalog_images/prod_img_57.png';

export interface ProductModel {
  catNo: string;
  rating?: string;
  poles?: string;
  volts?: string;
  pkg?: string;
  type?: string;
}

export interface Product {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  specs: string[];
  hsnCode: string;
  models: ProductModel[];
}

export const categories = [
  'All Products',
  'Distribution Boards',
  'Plugs & Sockets',
  'Switchgears & Fuses',
  'Junctions & Push Buttons'
];

export const productsData: Product[] = [
  {
    id: 1,
    title: 'L.T. Control Reverse Forward Switch',
    category: 'Switchgears & Fuses',
    image: prodImg1,
    description: 'Robust LT control reverse-forwarding switches designed for heavy mechanical operations, featuring silver-point contacts and durable bakelite block base.',
    specs: ['16G Solid Metal Body', 'EC Grade Copper Contacts', 'P.F Moulding Bakelite Block', 'Electric Proof Coating'],
    hsnCode: '85365010',
    models: [
      {catNo: 'RF1603', rating: '16 Amp', poles: '3 Pole', volts: '440V', pkg: '40', type: 'R/F'},
      {catNo: 'OF1603', rating: '16 Amp', poles: '3 Pole', volts: '440V', pkg: '40', type: 'ON/OFF'},
      {catNo: 'RF3203', rating: '32 Amp', poles: '3 Pole', volts: '440V', pkg: '40', type: 'R/F'},
      {catNo: 'OF3203', rating: '32 Amp', poles: '3 Pole', volts: '440V', pkg: '40', type: 'ON/OFF'}
    ]
  },
  {
    id: 2,
    title: 'L.T. Control Reverse Forward Switch (SIEMENS Type)',
    category: 'Switchgears & Fuses',
    image: prodImg2,
    description: 'Siemens type reverse forward switch designed with a heavy dust-proof enclosure, silver-plated copper contacts, and a 360-degree rotating handle for industrial setups.',
    specs: ['SIEMENS Type Model design', 'Silver Point Metal Contacts', '360 Rotating steel Handle', 'Shock Proof Coating Finish'],
    hsnCode: '85365010',
    models: [
      {catNo: 'RFS4003', rating: '40 Amp', poles: '3 Pole', volts: '440V', pkg: '20', type: 'R/F'},
      {catNo: 'OFS4003', rating: '40 Amp', poles: '3 Pole', volts: '440V', pkg: '20', type: 'ON/OFF'},
      {catNo: 'RFSB4003', rating: '40 Amp (Big)', poles: '3 Pole', volts: '440V', pkg: '12', type: 'R/F'},
      {catNo: 'OFSB4003', rating: '40 Amp (Big)', poles: '3 Pole', volts: '440V', pkg: '12', type: 'ON/OFF'}
    ]
  },
  {
    id: 3,
    title: 'Compressor Auto Pressure Switch',
    category: 'Switchgears & Fuses',
    image: prodImg3,
    description: 'Pressure control switches designed for air compressor units, featuring silver-point electrical contacts and highly adjustable differential parameters.',
    specs: ['New Plastic Body Design', 'Silver Point Metal Contact', 'Connection Bakelite', 'Pressure & Diff. Adjustable'],
    hsnCode: '90322090',
    models: [
      {catNo: 'PR09', rating: '1-Port / 16A', volts: '220V', pkg: '50', type: 'Auto Switch'},
      {catNo: 'PR15', rating: '1-Port / 16A', volts: '220V', pkg: '50', type: 'Auto Switch'},
      {catNo: 'PRV09', rating: '1-Port / 16A (With Valve)', volts: '220V', pkg: '50', type: 'Auto Switch'},
      {catNo: 'PRV15', rating: '1-Port / 16A (With Valve)', volts: '220V', pkg: '50', type: 'Auto Switch'},
      {catNo: 'PR09X', rating: '4-Port / 16A', volts: '220V', pkg: '50', type: 'Auto Switch'},
      {catNo: 'PR15X', rating: '4-Port / 16A', volts: '220V', pkg: '50', type: 'Auto Switch'},
      {catNo: 'PRV09X', rating: '4-Port / 16A (With Valve)', volts: '220V', pkg: '50', type: 'Auto Switch'},
      {catNo: 'PRV15X', rating: '4-Port / 16A (With Valve)', volts: '220V', pkg: '50', type: 'Auto Switch'}
    ]
  },
  {
    id: 4,
    title: 'Bench Grinder Rotary Switch',
    category: 'Switchgears & Fuses',
    image: prodImg4,
    description: 'Premium glass-filled rotary switch configured for industrial bench grinding machines, ensuring robust circuit control and easy wiring setup.',
    specs: ['Nylon-6 Glass Field Material', 'EC Grade Copper Rivet', 'Dust Proof Body construction', 'Easy To Connect & Durable'],
    hsnCode: '85365010',
    models: [
      {catNo: 'GRS1602', rating: '16 Amp', poles: '2 Pole', volts: '240V', pkg: '100', type: 'Rotary Switch'},
      {catNo: 'GRS1603', rating: '16 Amp', poles: '3 Pole', volts: '440V', pkg: '100', type: 'Rotary Switch'},
      {catNo: 'GRS1003', rating: '10 Amp', poles: '3 Pole', volts: '440V', pkg: '100', type: 'Rotary Switch'}
    ]
  },
  {
    id: 5,
    title: 'Three Phase MCTP Main Switch (Sheet Metal)',
    category: 'Switchgears & Fuses',
    image: prodImg5,
    description: 'Heavy duty sheet metal switchgears configured for three-phase main distribution networks, utilizing pure copper contacts and a quick-break mechanism.',
    specs: ['Heavy Thick Sheet Metal Body', 'Nickel Plated Brass Contacts', 'Pure Copper Top Contacts', 'Strong Metal Handle'],
    hsnCode: '85353090',
    models: [
      {catNo: 'MCTP1603', rating: '16 Amp', poles: '3 Pole', volts: '440V', pkg: '20', type: 'MCTP Main'},
      {catNo: 'MCTP3202', rating: '32 Amp (DP)', poles: '2 Pole', volts: '240V', pkg: '20', type: 'DP Main'},
      {catNo: 'MCTP3203', rating: '32 Amp', poles: '3 Pole', volts: '440V', pkg: '20', type: 'MCTP Main'},
      {catNo: 'MCTP6303', rating: '63 Amp', poles: '3 Pole', volts: '440V', pkg: '10', type: 'MCTP Main'},
      {catNo: 'MCTP10003', rating: '100 Amp', poles: '3 Pole', volts: '440V', pkg: '4', type: 'MCTP Main'},
      {catNo: 'MCTP20003', rating: '200 Amp', poles: '3 Pole', volts: '440V', pkg: '2', type: 'MCTP Main'}
    ]
  },
  {
    id: 6,
    title: 'Change Over Switch (Sheet Metal)',
    category: 'Switchgears & Fuses',
    image: prodImg6,
    description: 'Double throw manual changeover switches designed with premium contacts and thick enclosures for load transfer between grid and backup generators.',
    specs: ['Heavy Gauge Sheet Metal Enclosure', 'High Conductivity Copper Contacts', 'Dual-Position Quick Break Handle', 'Safety interlocking feature'],
    hsnCode: '85365010',
    models: [
      {catNo: 'COS3202', rating: '32 Amp (DP)', poles: '2 Pole', volts: '240V', pkg: '15', type: 'Change Over'},
      {catNo: 'COS3204', rating: '32 Amp (FP)', poles: '4 Pole', volts: '440V', pkg: '10', type: 'Change Over'},
      {catNo: 'COS6302', rating: '63 Amp (DP)', poles: '2 Pole', volts: '240V', pkg: '10', type: 'Change Over'},
      {catNo: 'COS6304', rating: '63 Amp (FP)', poles: '4 Pole', volts: '440V', pkg: '5', type: 'Change Over'},
      {catNo: 'COS20004', rating: '200 Amp (FP)', poles: '4 Pole', volts: '440V', pkg: '2', type: 'Change Over'}
    ]
  },
  {
    id: 7,
    title: 'Bus Bar Chamber',
    category: 'Switchgears & Fuses',
    image: prodImg7,
    description: 'Sleek and heavy-duty busbar chambers featuring solid copper bars and insulated supports, ideal for multi-connection power distribution systems.',
    specs: ['Thick Gauge Steel Body Enclosure', 'Solid Electrolytic Copper Bars', 'Superior Insulation Block base', 'Removable Gland Plates'],
    hsnCode: '85371000',
    models: [
      {catNo: 'BBC903', rating: '100A / 300mm', poles: '4 Pole', volts: '415V', pkg: '6', type: 'Copper Busbar'},
      {catNo: 'BBC906', rating: '200A / 300mm', poles: '4 Pole', volts: '415V', pkg: '6', type: 'Copper Busbar'},
      {catNo: 'BBC1206', rating: '200A / 375mm', poles: '4 Pole', volts: '415V', pkg: '4', type: 'Copper Busbar'},
      {catNo: 'BBC1210', rating: '320A / 375mm', poles: '4 Pole', volts: '415V', pkg: '4', type: 'Copper Busbar'},
      {catNo: 'BBC1220', rating: '400A / 375mm', poles: '4 Pole', volts: '415V', pkg: '4', type: 'Copper Busbar'},
      {catNo: 'BBC1510', rating: '320A / 450mm', poles: '4 Pole', volts: '415V', pkg: '2', type: 'Copper Busbar'},
      {catNo: 'BBC1520', rating: '400A / 450mm', poles: '4 Pole', volts: '415V', pkg: '2', type: 'Copper Busbar'},
      {catNo: 'BBC1530', rating: '500A / 450mm', poles: '4 Pole', volts: '415V', pkg: '2', type: 'Copper Busbar'},
      {catNo: 'BBC1540', rating: '600A / 450mm', poles: '4 Pole', volts: '415V', pkg: '2', type: 'Copper Busbar'},
      {catNo: 'BBC1820', rating: '400A / 530mm', poles: '4 Pole', volts: '415V', pkg: '1', type: 'Copper Busbar'},
      {catNo: 'BBC1830', rating: '500A / 530mm', poles: '4 Pole', volts: '415V', pkg: '1', type: 'Copper Busbar'},
      {catNo: 'BBC1840', rating: '600A / 530mm', poles: '4 Pole', volts: '415V', pkg: '1', type: 'Copper Busbar'},
      {catNo: 'BBC1860', rating: '800A / 530mm', poles: '4 Pole', volts: '415V', pkg: '1', type: 'Copper Busbar'},
      {catNo: 'BBC12B', rating: '200A (B-Type)', poles: '4 Pole', volts: '415V', pkg: '4', type: 'Copper Busbar'},
      {catNo: 'BBC15B', rating: '400A (B-Type)', poles: '4 Pole', volts: '415V', pkg: '2', type: 'Copper Busbar'},
      {catNo: 'BBC18B', rating: '600A (B-Type)', poles: '4 Pole', volts: '415V', pkg: '1', type: 'Copper Busbar'}
    ]
  },
  {
    id: 8,
    title: 'Porcelain Kit Kit Fuse (K-Type)',
    category: 'Switchgears & Fuses',
    image: prodImg8,
    description: 'Standard ceramic porcelain kit-kat fuses (K-Type) designed with high mechanical dielectric strength and robust nickel-plated brass contacts for ultimate circuit safety.',
    specs: ['Cream Porcelain Ceramic Body', 'Nickel Plated Brass Contacts', 'Dielectric Strength : 55 kV/mm', 'Durable Bottom Clamps'],
    hsnCode: '85361000',
    models: [
      {catNo: 'FSRK16', rating: '16 Amp', volts: '240V', pkg: '120', type: 'K-Type Fuse'},
      {catNo: 'FSRK32', rating: '32 Amp', volts: '415V', pkg: '80', type: 'K-Type Fuse'},
      {catNo: 'FSRK63', rating: '63 Amp', volts: '415V', pkg: '36', type: 'K-Type Fuse'}
    ]
  },
  {
    id: 9,
    title: 'Porcelain Kit Kat Fuse (Handle Type)',
    category: 'Switchgears & Fuses',
    image: prodImg9,
    description: 'Heavy amperage porcelain fuse carrier blocks equipped with strong handle locks to ensure secure leverage and protection during high current interruptions.',
    specs: ['Reinforced Handle Grip design', 'EC Grade Copper Top Contacts', 'Arc Extinction Path Support', 'Heavy Dielectric Insulation'],
    hsnCode: '85361000',
    models: [
      {catNo: 'FSRH63', rating: '63 Amp', volts: '415V', pkg: '36', type: 'Handle Fuse'},
      {catNo: 'FSRH63L', rating: '63 Amp (Long)', volts: '415V', pkg: '24', type: 'Handle Fuse'},
      {catNo: 'FSRH200', rating: '200 Amp', volts: '415V', pkg: '8', type: 'Handle Fuse'},
      {catNo: 'FSRH200L', rating: '200 Amp (Long)', volts: '415V', pkg: '6', type: 'Handle Fuse'}
    ]
  },
  {
    id: 10,
    title: 'Porcelain Kit Kat Fuse (SECO Type)',
    category: 'Switchgears & Fuses',
    image: prodImg10,
    description: 'Premium SECO type ceramic cartridge fuse units designed for major utility and industrial switchboard installations. Heavy-duty current protection.',
    specs: ['Industrial SECO Type design', 'Ultra-High Heat Ceramic Body', 'Nickel Plated Heavy Clamps', 'Conforms to IS/IEC standards'],
    hsnCode: '85361000',
    models: [
      {catNo: 'FSEK16', rating: '16 Amp (K-Type)', volts: '240V', pkg: '120', type: 'SECO Fuse'},
      {catNo: 'FSEK32', rating: '32 Amp (K-Type)', volts: '415V', pkg: '80', type: 'SECO Fuse'},
      {catNo: 'FSEK63', rating: '63 Amp (K-Type)', volts: '415V', pkg: '36', type: 'SECO Fuse'},
      {catNo: 'FSEH63', rating: '63 Amp (Handle)', volts: '415V', pkg: '36', type: 'SECO Fuse'},
      {catNo: 'FSEH63L', rating: '63 Amp (Long Handle)', volts: '415V', pkg: '24', type: 'SECO Fuse'},
      {catNo: 'FSEH200', rating: '200 Amp (Handle)', volts: '415V', pkg: '8', type: 'SECO Fuse'},
      {catNo: 'FSEH200L', rating: '200 Amp (Long Handle)', volts: '415V', pkg: '6', type: 'SECO Fuse'},
      {catNo: 'FSEH500L', rating: '500 Amp (Long Handle)', volts: '415V', pkg: '2', type: 'SECO Fuse'}
    ]
  },
  {
    id: 11,
    title: 'Weather-Proof IP44 Industrial Plug',
    category: 'Plugs & Sockets',
    image: prodImg11,
    description: 'Standard IP44 splash-proof industrial plugs with solid brass contact pins and durable housing, designed for heavy machinery operations.',
    specs: ['IP44 Splash-Proof Grade', 'Heavy Nylon Impact Body', 'High Conductivity Brass Pins', 'Dust-Tight Gasket Cable Entry'],
    hsnCode: '85366990',
    models: [
      {catNo: 'PIP44013', rating: '16A / 3-Pin', poles: '2P+E', volts: '240V', pkg: '100', type: 'IP44 Plug'},
      {catNo: 'PIP44015', rating: '16A / 5-Pin', poles: '3P+N+E', volts: '415V', pkg: '60', type: 'IP44 Plug'},
      {catNo: 'PIP44023', rating: '32A / 3-Pin', poles: '2P+E', volts: '240V', pkg: '60', type: 'IP44 Plug'},
      {catNo: 'PIP44025', rating: '32A / 5-Pin', poles: '3P+N+E', volts: '415V', pkg: '40', type: 'IP44 Plug'}
    ]
  },
  {
    id: 12,
    title: 'Weather-Proof IP44 Industrial Socket',
    category: 'Plugs & Sockets',
    image: prodImg12,
    description: 'IP44 wall mounting splash-proof sockets equipped with spring-loaded protective flip lids and heavy-duty contact sleeves.',
    specs: ['IP44 Protective Flip Lid', 'Solid Brass Terminal Sleeves', 'Chemical & Heat Resistant PVC', 'Conforms to IEC 60309'],
    hsnCode: '85366990',
    models: [
      {catNo: 'PIS44013', rating: '16A / 3-Pin', poles: '2P+E', volts: '240V', pkg: '100', type: 'IP44 Socket'},
      {catNo: 'PIS44015', rating: '16A / 5-Pin', poles: '3P+N+E', volts: '415V', pkg: '60', type: 'IP44 Socket'},
      {catNo: 'PIS44023', rating: '32A / 3-Pin', poles: '2P+E', volts: '240V', pkg: '60', type: 'IP44 Socket'},
      {catNo: 'PIS44025', rating: '32A / 5-Pin', poles: '3P+N+E', volts: '415V', pkg: '40', type: 'IP44 Socket'}
    ]
  },
  {
    id: 13,
    title: 'Weather-Proof IP44 Industrial Connector',
    category: 'Plugs & Sockets',
    image: prodImg13,
    description: 'IP44 inline coupler connectors with cable strain relief clamps, providing safe extension links in damp environments.',
    specs: ['IP44 Strain Relief Coupler', 'Double Cable Grip Gasket', 'Nickel Plated Pin Sleeves', 'Industrial Extension Friendly'],
    hsnCode: '85366990',
    models: [
      {catNo: 'PIC44013', rating: '16A / 3-Pin', poles: '2P+E', volts: '240V', pkg: '100', type: 'IP44 Connector'},
      {catNo: 'PIC44015', rating: '16A / 5-Pin', poles: '3P+N+E', volts: '415V', pkg: '60', type: 'IP44 Connector'},
      {catNo: 'PIC44023', rating: '32A / 3-Pin', poles: '2P+E', volts: '240V', pkg: '60', type: 'IP44 Connector'},
      {catNo: 'PIC44025', rating: '32A / 5-Pin', poles: '3P+N+E', volts: '415V', pkg: '40', type: 'IP44 Connector'}
    ]
  },
  {
    id: 14,
    title: 'Weather-Proof IP67 Industrial Plug',
    category: 'Plugs & Sockets',
    image: prodImg14,
    description: 'IP67 fully waterproof industrial plugs with threaded locking rings and sealing collars, suitable for wet conditions.',
    specs: ['IP67 Threaded Lock Ring', 'Complete Gasket Seals', 'Heavy Corrosion-Free Pins', 'Waterproof Cap Included'],
    hsnCode: '85366990',
    models: [
      {catNo: 'PIP670132', rating: '16A / 3-Pin', poles: '2P+E', volts: '240V', pkg: '60', type: 'IP67 Plug'},
      {catNo: 'PIP670252', rating: '32A / 5-Pin', poles: '3P+N+E', volts: '415V', pkg: '30', type: 'IP67 Plug'},
      {catNo: 'PIP67035', rating: '63A / 5-Pin', poles: '3P+N+E', volts: '415V', pkg: '12', type: 'IP67 Plug'}
    ]
  },
  {
    id: 15,
    title: 'Weather-Proof IP67 Industrial Socket',
    category: 'Plugs & Sockets',
    image: prodImg15,
    description: 'IP67 wall/panel-mounting waterproof sockets with secure bayonet locking caps and heat-resistant contacts.',
    specs: ['IP67 Bayonet Locking Cap', 'Sealed Wall Gland Entry', 'Corrosion Resistant Screws', 'Heavy Dielectric Sleeves'],
    hsnCode: '85366990',
    models: [
      {catNo: 'PIS670132', rating: '16A / 3-Pin', poles: '2P+E', volts: '240V', pkg: '60', type: 'IP67 Socket'},
      {catNo: 'PIS670252', rating: '32A / 5-Pin', poles: '3P+N+E', volts: '415V', pkg: '30', type: 'IP67 Socket'},
      {catNo: 'PIS67035', rating: '63A / 5-Pin', poles: '3P+N+E', volts: '415V', pkg: '12', type: 'IP67 Socket'}
    ]
  },
  {
    id: 16,
    title: 'Weather-Proof IP67 Industrial Connector',
    category: 'Plugs & Sockets',
    image: prodImg16,
    description: 'IP67 inline extension socket connectors utilizing secure sealing collars, perfect for wet wash-down zones.',
    specs: ['IP67 Watertight Seals', 'Reinforced Strain Relief', 'Double Lock Cable Glands', 'Industrial Link Safety'],
    hsnCode: '85366990',
    models: [
      {catNo: 'PIC670132', rating: '16A / 3-Pin', poles: '2P+E', volts: '240V', pkg: '60', type: 'IP67 Connector'},
      {catNo: 'PIC670252', rating: '32A / 5-Pin', poles: '3P+N+E', volts: '415V', pkg: '30', type: 'IP67 Connector'},
      {catNo: 'PIC67035', rating: '63A / 5-Pin', poles: '3P+N+E', volts: '415V', pkg: '12', type: 'IP67 Connector'}
    ]
  },
  {
    id: 17,
    title: 'Metal Clad Plug',
    category: 'Plugs & Sockets',
    image: prodImg17,
    description: 'Durable metal-clad plugs built with heavy-duty cast aluminum casing, engineered for harsh workshops and factory sites.',
    specs: ['Cast Aluminum Heavy Casing', 'Dielectric Bakelite Pin Base', 'Solid Brass Ground & Power Pins', 'Robust Cable Grip Clamp'],
    hsnCode: '85366990',
    models: [
      {catNo: 'MCP202', rating: '20A / 2-Pin', poles: '2P+E', volts: '250V', pkg: '60', type: 'Metal Plug'},
      {catNo: 'MCP203', rating: '20A / 3-Pin', poles: '3P+E', volts: '440V', pkg: '60', type: 'Metal Plug'},
      {catNo: 'MCP303', rating: '30A / 3-Pin', poles: '3P+E', volts: '440V', pkg: '60', type: 'Metal Plug'}
    ]
  },
  {
    id: 18,
    title: 'Metal Clad Socket',
    category: 'Plugs & Sockets',
    image: prodImg18,
    description: 'Heavy-duty wall mounting metal-clad sockets equipped with protective metal spring flip covers and safety ground chains.',
    specs: ['Rust-Proof Powder Finish', 'Spring Metal Protection Cover', 'Safety Ground Grounding Chain', 'Bakelite Core Support'],
    hsnCode: '85366990',
    models: [
      {catNo: 'MCS202', rating: '20A / 2-Pin', poles: '2P+E', volts: '250V', pkg: '60', type: 'Metal Socket'},
      {catNo: 'MCS203', rating: '20A / 3-Pin', poles: '3P+E', volts: '440V', pkg: '60', type: 'Metal Socket'},
      {catNo: 'MCS303', rating: '30A / 3-Pin', poles: '3P+E', volts: '440V', pkg: '60', type: 'Metal Socket'}
    ]
  },
  {
    id: 19,
    title: 'Limit Control Switch',
    category: 'Switchgears & Fuses',
    image: prodImg19,
    description: 'Heavy-duty limit switches with double breaker contacts and adjustable lever rollers, engineered for elevator lift systems.',
    specs: ['Aluminum Die Cast Body', 'Adjustable Roller Arm lever', '1NO + 1NC Micro-Switch Core', 'Durable spring return action'],
    hsnCode: '85365090',
    models: [
      {catNo: 'LCS1501', rating: '10 Amp', volts: '240V', pkg: '50', type: 'Limit Switch'},
      {catNo: 'LCS1502', rating: '15 Amp', volts: '415V', pkg: '50', type: 'Limit Switch'},
      {catNo: 'LCS1504', rating: '20 Amp', volts: '415V', pkg: '30', type: 'Limit Switch'}
    ]
  },
  {
    id: 20,
    title: 'European Standard Panel Socket Board',
    category: 'Plugs & Sockets',
    image: prodImg20,
    description: 'German standard modular panel board mounting industrial sockets with integrated SP or DP MCBs and flip cover slots.',
    specs: ['IP54 Splash Proof Sockets', 'Integrated DIN Rail MCB Slot', 'Tough PVC Housing Enclosure', 'Factory Pre-wired busbars'],
    hsnCode: '85371000',
    models: [
      {catNo: 'MPSM63111', rating: '16A / 3-Pin Socket + SP MCB', pkg: '30', type: 'Schuko Board'},
      {catNo: 'MPSM63112', rating: '16A / 3-Pin Socket + DP MCB', pkg: '30', type: 'Schuko Board'},
      {catNo: 'MPSM63113', rating: '32A / 5-Pin Socket + TPN MCB', pkg: '19', type: 'TPN Schuko Board'}
    ]
  },
  {
    id: 21,
    title: 'Metal MCB Enclosure (SP/DP)',
    category: 'Distribution Boards',
    image: prodImg21,
    description: 'Compact sheet metal MCB enclosures suitable for SP or DP breakers, finished with electrostatic scratch-free powder coating.',
    specs: ['22G Thick Sheet Metal Body', 'Electrostatic Powder finish', 'Easy DIN Rail Mounting rail', 'Compact Flush mounting style'],
    hsnCode: '85371000',
    models: [
      {catNo: 'MEB102', rating: '1 or 2 Way (SP)', pkg: '100', type: 'Metal Box'},
      {catNo: 'MEB104', rating: '3 or 4 Way (DP)', pkg: '80', type: 'Metal Box'},
      {catNo: 'MEB202', rating: '1 or 2 Way (Premium)', pkg: '100', type: 'Metal Box'},
      {catNo: 'MEB204', rating: '3 or 4 Way (Premium)', pkg: '80', type: 'Metal Box'}
    ]
  },
  {
    id: 22,
    title: 'SPN Deluxe MCB Distribution Board (Single Door)',
    category: 'Distribution Boards',
    image: prodImg22,
    description: 'Standard single door MCB distribution boards for SPN networks, featuring pre-mounted neutral links and removable front plate.',
    specs: ['22G Solid Sheet Metal Body', 'Zinc Plated Neutral Link base', 'Pre-installed DIN Rail channel', 'Generous wiring wire space'],
    hsnCode: '85371000',
    models: [
      {catNo: 'MSSD04', rating: '4 Way SPN', pkg: '20', type: 'Single Door'},
      {catNo: 'MSSD06', rating: '6 Way SPN', pkg: '20', type: 'Single Door'},
      {catNo: 'MSSD08', rating: '8 Way SPN', pkg: '15', type: 'Single Door'},
      {catNo: 'MSSD10', rating: '10 Way SPN', pkg: '15', type: 'Single Door'},
      {catNo: 'MSSD12', rating: '12 Way SPN', pkg: '10', type: 'Single Door'},
      {catNo: 'MSSD16', rating: '16 Way SPN', pkg: '10', type: 'Single Door'}
    ]
  },
  {
    id: 23,
    title: 'SPN Deluxe MCB Distribution Board (Double Door)',
    category: 'Distribution Boards',
    image: prodImg23,
    description: 'Double door version of the SPN distribution board, offering a flush safety cover and internal gasket seals for neat installations.',
    specs: ['Heavy 20G Double Door front', 'Flush Lock Latches & handles', 'Protective Internal Shield plate', 'IP43 Dust Ingress Protection'],
    hsnCode: '85371000',
    models: [
      {catNo: 'MDDD04', rating: '4 Way SPN', pkg: '10', type: 'Double Door'},
      {catNo: 'MDDD06', rating: '6 Way SPN', pkg: '10', type: 'Double Door'},
      {catNo: 'MDDD08', rating: '8 Way SPN', pkg: '8', type: 'Double Door'},
      {catNo: 'MDDD10', rating: '10 Way SPN', pkg: '8', type: 'Double Door'},
      {catNo: 'MDDD12', rating: '12 Way SPN', pkg: '6', type: 'Double Door'},
      {catNo: 'MDDD16', rating: '16 Way SPN', pkg: '6', type: 'Double Door'}
    ]
  },
  {
    id: 24,
    title: 'SPN Magnetic MCB Distribution Board (Single Door)',
    category: 'Distribution Boards',
    image: prodImg24,
    description: 'Magnetic single door distribution board utilizing quick-snap magnetic locks for fast access and tool-free maintenance.',
    specs: ['Quick Snap Magnetic Lock latch', 'Finished in Premium ivory shade', 'Knockouts on top and bottom', 'Clean modern aesthetics'],
    hsnCode: '85371000',
    models: [
      {catNo: 'MSMD04', rating: '4 Way SPN', pkg: '20', type: 'Magnetic Single'},
      {catNo: 'MSMD06', rating: '6 Way SPN', pkg: '20', type: 'Magnetic Single'},
      {catNo: 'MSMD08', rating: '8 Way SPN', pkg: '15', type: 'Magnetic Single'},
      {catNo: 'MSMD10', rating: '10 Way SPN', pkg: '15', type: 'Magnetic Single'},
      {catNo: 'MSMD12', rating: '12 Way SPN', pkg: '10', type: 'Magnetic Single'},
      {catNo: 'MSMD16', rating: '16 Way SPN', pkg: '10', type: 'Magnetic Single'}
    ]
  },
  {
    id: 25,
    title: 'SPN Magnetic MCB Distribution Board (Double Door)',
    category: 'Distribution Boards',
    image: prodImg25,
    description: 'Double door distribution board combining magnetic lock door closure with dustproof internal shields for residential complexes.',
    specs: ['Magnetic Double Door closure', 'Durable Internal Dust Shield', 'Electrolytic Copper Phase Links', 'Heavy-gauge steel chassis'],
    hsnCode: '85371000',
    models: [
      {catNo: 'MDMD04', rating: '4 Way SPN', pkg: '10', type: 'Magnetic Double'},
      {catNo: 'MDMD06', rating: '6 Way SPN', pkg: '10', type: 'Magnetic Double'},
      {catNo: 'MDMD08', rating: '8 Way SPN', pkg: '8', type: 'Magnetic Double'},
      {catNo: 'MDMD10', rating: '10 Way SPN', pkg: '8', type: 'Magnetic Double'},
      {catNo: 'MDMD12', rating: '12 Way SPN', pkg: '6', type: 'Magnetic Double'},
      {catNo: 'MDMD16', rating: '16 Way SPN', pkg: '6', type: 'Magnetic Double'}
    ]
  },
  {
    id: 26,
    title: 'SPN Premium MCB Distribution Board (Single Door)',
    category: 'Distribution Boards',
    image: prodImg26,
    description: 'Premium industrial grade single door DB boards with thick steel backplate, providing superior load protection.',
    specs: ['Reinforced 20G Metal Body', 'Corrosion Resistant Undercoat', 'Pre-fitted Neutral Links Link', 'Flush mounting design frame'],
    hsnCode: '85371000',
    models: [
      {catNo: 'MSPM04', rating: '4 Way SPN', pkg: '20', type: 'Premium Single'},
      {catNo: 'MSPM06', rating: '6 Way SPN', pkg: '20', type: 'Premium Single'},
      {catNo: 'MSPM08', rating: '8 Way SPN', pkg: '15', type: 'Premium Single'},
      {catNo: 'MSPM10', rating: '10 Way SPN', pkg: '15', type: 'Premium Single'},
      {catNo: 'MSPM12', rating: '12 Way SPN', pkg: '10', type: 'Premium Single'},
      {catNo: 'MSPM16', rating: '16 Way SPN', pkg: '10', type: 'Premium Single'}
    ]
  },
  {
    id: 27,
    title: 'SPN Premium MCB Distribution Board (Double Door)',
    category: 'Distribution Boards',
    image: prodImg27,
    description: 'High-end premium double door distribution board featuring superior scratch-proof matte paint and heavy brass neutral link components.',
    specs: ['20G Thick Steel Plate', 'Scratch-Proof Matte Paint finish', 'Solid Brass Neutral Links links', 'Spacious Internal Wiring loops'],
    hsnCode: '85371000',
    models: [
      {catNo: 'MDPM04', rating: '4 Way SPN', pkg: '10', type: 'Premium Double'},
      {catNo: 'MDPM06', rating: '6 Way SPN', pkg: '10', type: 'Premium Double'},
      {catNo: 'MDPM08', rating: '8 Way SPN', pkg: '8', type: 'Premium Double'},
      {catNo: 'MDPM10', rating: '10 Way SPN', pkg: '8', type: 'Premium Double'},
      {catNo: 'MDPM12', rating: '12 Way SPN', pkg: '6', type: 'Premium Double'},
      {catNo: 'MDPM16', rating: '16 Way SPN', pkg: '6', type: 'Premium Double'}
    ]
  },
  {
    id: 28,
    title: 'Whiteline SPN MCB Distribution Board (Single Door)',
    category: 'Distribution Boards',
    image: prodImg28,
    description: 'Whiteline series single door distribution board, customized with a brilliant white powder coat finish for modern housing.',
    specs: ['Brilliant White Gloss Coating', 'Top & Bottom Knockouts slots', 'Pre-mounted Neutral Bar block', 'Conforms to utility standards'],
    hsnCode: '85371000',
    models: [
      {catNo: 'WMSD04', rating: '4 Way SPN', pkg: '20', type: 'Whiteline Single'},
      {catNo: 'WMSD06', rating: '6 Way SPN', pkg: '20', type: 'Whiteline Single'},
      {catNo: 'WMSD08', rating: '8 Way SPN', pkg: '15', type: 'Whiteline Single'},
      {catNo: 'WMSD10', rating: '10 Way SPN', pkg: '15', type: 'Whiteline Single'},
      {catNo: 'WMSD12', rating: '12 Way SPN', pkg: '10', type: 'Whiteline Single'},
      {catNo: 'WMSD16', rating: '16 Way SPN', pkg: '10', type: 'Whiteline Single'}
    ]
  },
  {
    id: 29,
    title: 'Whiteline SPN MCB Distribution Board (Double Door)',
    category: 'Distribution Boards',
    image: prodImg29,
    description: 'Double door version of the Whiteline SPN distribution board, combining high safety with elegant design panels.',
    specs: ['Whiteline Double Door latch', 'Removable Gland Plate cover', 'Insulated Copper Busbar loop', 'Premium modern look feel'],
    hsnCode: '85371000',
    models: [
      {catNo: 'WMDD04', rating: '4 Way SPN', pkg: '10', type: 'Whiteline Double'},
      {catNo: 'WMDD06', rating: '6 Way SPN', pkg: '10', type: 'Whiteline Double'},
      {catNo: 'WMDD08', rating: '8 Way SPN', pkg: '8', type: 'Whiteline Double'},
      {catNo: 'WMDD10', rating: '10 Way SPN', pkg: '8', type: 'Whiteline Double'},
      {catNo: 'WMDD12', rating: '12 Way SPN', pkg: '6', type: 'Whiteline Double'},
      {catNo: 'WMDD16', rating: '16 Way SPN', pkg: '6', type: 'Whiteline Double'}
    ]
  },
  {
    id: 30,
    title: 'TPN Deluxe MCB Distribution Board (Single Door)',
    category: 'Distribution Boards',
    image: prodImg30,
    description: 'Standard TPN single door board for three-phase installations, configured with copper face links and heavy neutral bar.',
    specs: ['20G Thick Metal Body', 'Copper Face Links Included', 'Zinc Plated Neutral Bar block', 'Dust Proof Body design'],
    hsnCode: '85371000',
    models: [
      {catNo: 'MTSD04', rating: '4 Way TPN', pkg: '10', type: 'Single Door'},
      {catNo: 'MTSD06', rating: '6 Way TPN', pkg: '8', type: 'Single Door'},
      {catNo: 'MTSD08', rating: '8 Way TPN', pkg: '8', type: 'Single Door'},
      {catNo: 'MTSD10', rating: '10 Way TPN', pkg: '6', type: 'Single Door'},
      {catNo: 'MTSD12', rating: '12 Way TPN', pkg: '4', type: 'Single Door'}
    ]
  },
  {
    id: 31,
    title: 'TPN Deluxe MCB Distribution Board (Double Door)',
    category: 'Distribution Boards',
    image: prodImg31,
    description: 'Double door version of the TPN distribution board, providing complete internal shield plate safety for three phase breakers.',
    specs: ['Double Door safety shield', 'Internal Copper Phase links', 'Durable lockable door latch', 'IP43 Enclosure Class'],
    hsnCode: '85371000',
    models: [
      {catNo: 'MTDD04', rating: '4 Way TPN', pkg: '6', type: 'Double Door'},
      {catNo: 'MTDD06', rating: '6 Way TPN', pkg: '4', type: 'Double Door'},
      {catNo: 'MTDD08', rating: '8 Way TPN', pkg: '4', type: 'Double Door'},
      {catNo: 'MTDD10', rating: '10 Way TPN', pkg: '3', type: 'Double Door'},
      {catNo: 'MTDD12', rating: '12 Way TPN', pkg: '2', type: 'Double Door'}
    ]
  },
  {
    id: 32,
    title: 'TPN Magnetic MCB Distribution Board (Single Door)',
    category: 'Distribution Boards',
    image: prodImg32,
    description: 'Magnetic single door distribution board for three-phase lines, utilizing quick-latch magnetic strip locks.',
    specs: ['Quick-Snap Magnetic Latch latch', 'Ivory powder coat color', 'Removable gland plates cover', 'Spacious neutral links loops'],
    hsnCode: '85371000',
    models: [
      {catNo: 'MTMD04', rating: '4 Way TPN', pkg: '10', type: 'Magnetic Single'},
      {catNo: 'MTMD06', rating: '6 Way TPN', pkg: '8', type: 'Magnetic Single'},
      {catNo: 'MTMD08', rating: '8 Way TPN', pkg: '8', type: 'Magnetic Single'},
      {catNo: 'MTMD10', rating: '10 Way TPN', pkg: '6', type: 'Magnetic Single'},
      {catNo: 'MTMD12', rating: '12 Way TPN', pkg: '4', type: 'Magnetic Single'}
    ]
  },
  {
    id: 33,
    title: 'TPN Magnetic MCB Distribution Board (Double Door)',
    category: 'Distribution Boards',
    image: prodImg33,
    description: 'Three phase double door magnetic distribution board combining snap-close magnetic strip with inner safety face plates.',
    specs: ['Magnetic Double Door closure', 'Durable Internal Dust Shield', 'Solid copper phase bars', 'Knockouts on top and bottom'],
    hsnCode: '85371000',
    models: [
      {catNo: 'MTMDD04', rating: '4 Way TPN', pkg: '6', type: 'Magnetic Double'},
      {catNo: 'MTMDD06', rating: '6 Way TPN', pkg: '4', type: 'Magnetic Double'},
      {catNo: 'MTMDD08', rating: '8 Way TPN', pkg: '4', type: 'Magnetic Double'},
      {catNo: 'MTMDD10', rating: '10 Way TPN', pkg: '3', type: 'Magnetic Double'},
      {catNo: 'MTMDD12', rating: '12 Way TPN', pkg: '2', type: 'Magnetic Double'}
    ]
  },
  {
    id: 34,
    title: 'TPN Premium MCB Distribution Board (Single Door)',
    category: 'Distribution Boards',
    image: prodImg34,
    description: 'Premium industrial grade single door TPN boards with heavy-duty metal gauge chassis and robust links.',
    specs: ['Reinforced 20G Metal Body', 'Heavy Copper Busbar bars', 'Specialized Neutral Links links', 'Shock proof undercoat layer'],
    hsnCode: '85371000',
    models: [
      {catNo: 'MTPM04', rating: '4 Way TPN', pkg: '10', type: 'Premium Single'},
      {catNo: 'MTPM06', rating: '6 Way TPN', pkg: '8', type: 'Premium Single'},
      {catNo: 'MTPM08', rating: '8 Way TPN', pkg: '8', type: 'Premium Single'},
      {catNo: 'MTPM10', rating: '10 Way TPN', pkg: '6', type: 'Premium Single'},
      {catNo: 'MTPM12', rating: '12 Way TPN', pkg: '4', type: 'Premium Single'}
    ]
  },
  {
    id: 35,
    title: 'TPN Premium MCB Distribution Board (Double Door)',
    category: 'Distribution Boards',
    image: prodImg35,
    description: 'High-end premium TPN double door distribution board featuring double lock handles and pre-fitted copper links.',
    specs: ['20G Thick Steel Chassis', 'Double Lock safety handle', 'Pre-fitted solid copper links', 'Spacious wire entry panels'],
    hsnCode: '85371000',
    models: [
      {catNo: 'MTPMD04', rating: '4 Way TPN', pkg: '6', type: 'Premium Double'},
      {catNo: 'MTPMD06', rating: '6 Way TPN', pkg: '4', type: 'Premium Double'},
      {catNo: 'MTPMD08', rating: '8 Way TPN', pkg: '4', type: 'Premium Double'},
      {catNo: 'MTPMD10', rating: '10 Way TPN', pkg: '3', type: 'Premium Double'},
      {catNo: 'MTPMD12', rating: '12 Way TPN', pkg: '2', type: 'Premium Double'}
    ]
  },
  {
    id: 36,
    title: 'SPN A.C. Box (Metal Enclosure)',
    category: 'Distribution Boards',
    image: prodImg36,
    description: 'Compact A.C. boxes equipped with metal enclosures, designed for residential single-phase A.C. units.',
    specs: ['22G Thick Metal Body', 'Electrostatic Powder finish', 'Built-in Plug Pin socket', 'Flush & wall mounting style'],
    hsnCode: '85371000',
    models: [
      {catNo: 'MAC6101', rating: '20A Plug + SP MCB', pkg: '30', type: 'Metal A.C. Box'},
      {catNo: 'MAC6102', rating: '30A Plug + DP MCB', pkg: '20', type: 'Metal A.C. Box'}
    ]
  },
  {
    id: 37,
    title: 'TPN A.C. Box (Metal Enclosure)',
    category: 'Distribution Boards',
    image: prodImg37,
    description: 'Heavy-duty three-phase A.C. boxes equipped with metal enclosures, ideal for commercial HVAC and high capacity systems.',
    specs: ['20G Solid Metal Body', 'Durable Bakelite base connector', 'Quick DIN Rail MCB fit', 'Industrial safety paint finish'],
    hsnCode: '85371000',
    models: [
      {catNo: 'MAC6301', rating: '32A Plug + TPN MCB', pkg: '12', type: 'Metal TPN Box'},
      {catNo: 'MAC6302', rating: '63A Plug + TPN MCB', pkg: '8', type: 'Metal TPN Box'}
    ]
  },
  {
    id: 38,
    title: '1 Socket + 1 MCB Board (Only Metal Board)',
    category: 'Distribution Boards',
    image: prodImg38,
    description: 'Compact distribution board for mounting 1 industrial socket and 1 MCB breaker. Fits SP, DP, or TPN breakers.',
    specs: ['20G Thick Metal Body', 'Scratch-Proof Powder finish', 'Customizable cutouts layout', 'DIN Rail pre-fitted inside'],
    hsnCode: '85371000',
    models: [
      {catNo: 'MSM1101', rating: 'Fits 1 Socket + 1 DP MCB', pkg: '30', type: 'Metal Socket Board'},
      {catNo: 'MSM1102', rating: 'Fits 1 Socket + 1 TPN MCB', pkg: '20', type: 'Metal Socket Board'}
    ]
  },
  {
    id: 39,
    title: '2 Socket + 1 MCB Board (Only Metal Board)',
    category: 'Distribution Boards',
    image: prodImg39,
    description: 'Metal enclosure board designed to mount 2 industrial sockets and 1 central MCB breaker for safety control.',
    specs: ['20G Thick Metal Body', 'Scratch-Proof Powder finish', 'Customizable cutouts layout', 'DIN Rail pre-fitted inside'],
    hsnCode: '85371000',
    models: [
      {catNo: 'MSM2101', rating: 'Fits 2 Sockets + 1 DP MCB', pkg: '24', type: 'Metal Socket Board'},
      {catNo: 'MSM2102', rating: 'Fits 2 Sockets + 1 TPN MCB', pkg: '18', type: 'Metal Socket Board'}
    ]
  },
  {
    id: 40,
    title: '3 Socket + 1 MCB Board (Only Metal Board)',
    category: 'Distribution Boards',
    image: prodImg40,
    description: 'Distribution board frame designed for 3 socket outlets and 1 central protective MCB breaker unit.',
    specs: ['20G Thick Metal Body', 'Scratch-Proof Powder finish', 'Customizable cutouts layout', 'DIN Rail pre-fitted inside'],
    hsnCode: '85371000',
    models: [
      {catNo: 'MSM3101', rating: 'Fits 3 Sockets + 1 DP MCB', pkg: '16', type: 'Metal Socket Board'},
      {catNo: 'MSM3102', rating: 'Fits 3 Sockets + 1 TPN MCB', pkg: '12', type: 'Metal Socket Board'}
    ]
  },
  {
    id: 41,
    title: '4 Socket + 1 MCB Board (Only Metal Board)',
    category: 'Distribution Boards',
    image: prodImg41,
    description: 'Metal enclosure board with cutout slots for mounting 4 socket units and 1 central MCB switch.',
    specs: ['20G Thick Metal Body', 'Scratch-Proof Powder finish', 'Customizable cutouts layout', 'DIN Rail pre-fitted inside'],
    hsnCode: '85371000',
    models: [
      {catNo: 'MSM4101', rating: 'Fits 4 Sockets + 1 DP MCB', pkg: '14', type: 'Metal Socket Board'},
      {catNo: 'MSM4102', rating: 'Fits 4 Sockets + 1 TPN MCB', pkg: '10', type: 'Metal Socket Board'}
    ]
  },
  {
    id: 42,
    title: '4 Socket + 2 MCB Board (Only Metal Board)',
    category: 'Distribution Boards',
    image: prodImg42,
    description: 'Durable metal board designed for 4 socket cutouts and 2 separate MCB breaker switches for load partitioning.',
    specs: ['20G Thick Metal Body', 'Scratch-Proof Powder finish', 'Customizable cutouts layout', 'DIN Rail pre-fitted inside'],
    hsnCode: '85371000',
    models: [
      {catNo: 'MSM4201', rating: 'Fits 4 Sockets + 2 DP MCBs', pkg: '12', type: 'Metal Socket Board'},
      {catNo: 'MSM4202', rating: 'Fits 4 Sockets + 2 TPN MCBs', pkg: '8', type: 'Metal Socket Board'}
    ]
  },
  {
    id: 43,
    title: '6 Socket + 1 MCB Board (Only Metal Board)',
    category: 'Distribution Boards',
    image: prodImg43,
    description: 'Enclosed distribution board frame with cutouts for 6 sockets controlled via 1 central master MCB switch.',
    specs: ['20G Thick Metal Body', 'Scratch-Proof Powder finish', 'Customizable cutouts layout', 'DIN Rail pre-fitted inside'],
    hsnCode: '85371000',
    models: [
      {catNo: 'MSM6101', rating: 'Fits 6 Sockets + 1 DP MCB', pkg: '10', type: 'Metal Socket Board'},
      {catNo: 'MSM6102', rating: 'Fits 6 Sockets + 1 TPN MCB', pkg: '8', type: 'Metal Socket Board'}
    ]
  },
  {
    id: 44,
    title: '8 Socket + 1 MCB Board (Only Metal Board)',
    category: 'Distribution Boards',
    image: prodImg44,
    description: 'Industrial grade distribution metal board frame supporting 8 sockets and 1 master safety breaker unit.',
    specs: ['20G Thick Metal Body', 'Scratch-Proof Powder finish', 'Customizable cutouts layout', 'DIN Rail pre-fitted inside'],
    hsnCode: '85371000',
    models: [
      {catNo: 'MSM8101', rating: 'Fits 8 Sockets + 1 DP MCB', pkg: '8', type: 'Metal Socket Board'},
      {catNo: 'MSM8102', rating: 'Fits 8 Sockets + 1 TPN MCB', pkg: '6', type: 'Metal Socket Board'}
    ]
  },
  {
    id: 45,
    title: '4 Socket + 4 MCB Board (Only Metal Board)',
    category: 'Distribution Boards',
    image: prodImg45,
    description: 'Modular distribution board supporting 4 socket connections, each individually controlled by its own dedicated MCB breaker switch.',
    specs: ['20G Thick Metal Body', 'Scratch-Proof Powder finish', 'Customizable cutouts layout', 'DIN Rail pre-fitted inside'],
    hsnCode: '85371000',
    models: [
      {catNo: 'MSM4401', rating: 'Fits 4 Sockets + 4 DP MCBs', pkg: '10', type: 'Metal Socket Board'},
      {catNo: 'MSM4402', rating: 'Fits 4 Sockets + 4 TPN MCBs', pkg: '8', type: 'Metal Socket Board'}
    ]
  },
  {
    id: 46,
    title: '6 Socket + 2 MCB Board (Only Metal Board)',
    category: 'Distribution Boards',
    image: prodImg46,
    description: 'Power distribution board frame with mounting spaces for 6 industrial sockets split across 2 central protective MCB systems.',
    specs: ['20G Thick Metal Body', 'Scratch-Proof Powder finish', 'Customizable cutouts layout', 'DIN Rail pre-fitted inside'],
    hsnCode: '85371000',
    models: [
      {catNo: 'MSM6201', rating: 'Fits 6 Sockets + 2 DP MCBs', pkg: '10', type: 'Metal Socket Board'},
      {catNo: 'MSM6202', rating: 'Fits 6 Sockets + 2 TPN MCBs', pkg: '6', type: 'Metal Socket Board'}
    ]
  },
  {
    id: 47,
    title: '8 Socket + 2 MCB Board (Only Metal Board)',
    category: 'Distribution Boards',
    image: prodImg47,
    description: 'Heavy-duty commercial distribution board frame for mounting 8 sockets controlled via 2 protective breakers.',
    specs: ['20G Thick Metal Body', 'Scratch-Proof Powder finish', 'Customizable cutouts layout', 'DIN Rail pre-fitted inside'],
    hsnCode: '85371000',
    models: [
      {catNo: 'MSM8201', rating: 'Fits 8 Sockets + 2 DP MCBs', pkg: '8', type: 'Metal Socket Board'},
      {catNo: 'MSM8202', rating: 'Fits 8 Sockets + 2 TPN MCBs', pkg: '4', type: 'Metal Socket Board'}
    ]
  },
  {
    id: 48,
    title: '2 Socket + 2 MCB Board (Only Metal Board)',
    category: 'Distribution Boards',
    image: prodImg48,
    description: 'Metal board distribution frame configured for 2 sockets, each controlled via a dedicated safety breaker.',
    specs: ['20G Thick Metal Body', 'Scratch-Proof Powder finish', 'Customizable cutouts layout', 'DIN Rail pre-fitted inside'],
    hsnCode: '85371000',
    models: [
      {catNo: 'MSM2201', rating: 'Fits 2 Sockets + 2 DP MCBs', pkg: '20', type: 'Metal Socket Board'},
      {catNo: 'MSM2202', rating: 'Fits 2 Sockets + 2 TPN MCBs', pkg: '14', type: 'Metal Socket Board'}
    ]
  },
  {
    id: 49,
    title: '3 Socket + 3 MCB Board (Only Metal Board)',
    category: 'Distribution Boards',
    image: prodImg49,
    description: 'Modular distribution board frame supporting 3 sockets and 3 separate breaker switch cutouts.',
    specs: ['20G Thick Metal Body', 'Scratch-Proof Powder finish', 'Customizable cutouts layout', 'DIN Rail pre-fitted inside'],
    hsnCode: '85371000',
    models: [
      {catNo: 'MSM3301', rating: 'Fits 3 Sockets + 3 DP MCBs', pkg: '14', type: 'Metal Socket Board'},
      {catNo: 'MSM3302', rating: 'Fits 3 Sockets + 3 TPN MCBs', pkg: '10', type: 'Metal Socket Board'}
    ]
  },
  {
    id: 50,
    title: '4 Socket + 2 MCB Board (MMSM Mix Size)',
    category: 'Distribution Boards',
    image: prodImg50,
    description: 'Mix size industrial distribution board designed for mounting 2 small size sockets, 2 big size sockets, and 2 MCB systems.',
    specs: ['20G Thick Metal Body', 'Supports DP & TPN MCBs', 'Mix size socket cutout slots', 'Industrial grade safety coat'],
    hsnCode: '85371000',
    models: [
      {catNo: 'MMSM64221', rating: 'Fits 2-16A + 2-32A Sockets + DP & TPN MCB', pkg: '20', type: 'MMSM Board'}
    ]
  },
  {
    id: 51,
    title: '4 Socket + 4 MCB Board (MMSM Mix Size)',
    category: 'Junctions & Push Buttons',
    image: prodImg51,
    description: 'Mix size modular distribution board supporting 2 small sockets, 2 big sockets, and 4 MCB breakers for fully isolated controls.',
    specs: ['20G Thick Metal Body', 'Supports DP & TPN MCBs', 'Four MCB breaker cutouts slots', 'Robust terminal assembly'],
    hsnCode: '85371000',
    models: [
      {catNo: 'MMSM64331', rating: 'Fits 2-16A + 2-32A Sockets + 2-DP & 2-TPN MCB', pkg: '14', type: 'MMSM Board'}
    ]
  },
  {
    id: 52,
    title: 'Metal Push Button Board (22mm-HOLE)',
    category: 'Junctions & Push Buttons',
    image: prodImg52,
    description: 'Sheet metal push-button station enclosures pre-punched with standard 22mm holes, finished with shock-proof coating.',
    specs: ['Pre-punched standard 22mm holes', '22G Sturdy Sheet Metal Body', 'Scratch resistant paint finish', 'Flush industrial installation style'],
    hsnCode: '85389000',
    models: [
      {catNo: 'MPBB5401', rating: '1 Way Enclosure', pkg: '50', type: 'Push Button Board'},
      {catNo: 'MPBB5402', rating: '2 Way Enclosure', pkg: '50', type: 'Push Button Board'},
      {catNo: 'MPBB5403', rating: '3 Way Enclosure', pkg: '50', type: 'Push Button Board'},
      {catNo: 'MPBB5404', rating: '4 Way Enclosure', pkg: '50', type: 'Push Button Board'},
      {catNo: 'MPBB5406', rating: '6 Way Enclosure', pkg: '50', type: 'Push Button Board'},
      {catNo: 'MPBB5408', rating: '8 Way Enclosure', pkg: '50', type: 'Push Button Board'}
    ]
  },
  {
    id: 53,
    title: 'PVC Socket + MCB Board (MPSM Series)',
    category: 'Junctions & Push Buttons',
    image: prodImg53,
    description: 'High impact ABS plastic board units designed to hold PVC socket outlets and MCB control switches, featuring clean wiring channels.',
    specs: ['High impact ABS plastic body', 'Waterproof & dustproof panel', 'DIN Rail pre-fitted inside', 'Excellent heat insulation core'],
    hsnCode: '85371000',
    models: [
      {catNo: 'MPSM68112', rating: '1+1 Way 16A & DP', pkg: '30', type: 'PVC Board'},
      {catNo: 'MPSM68222', rating: '2+2 Way 16A & DP', pkg: '20', type: 'PVC Board'},
      {catNo: 'MPSM68332', rating: '3+3 Way 16A & DP', pkg: '14', type: 'PVC Board'},
      {catNo: 'MPSM68442', rating: '4+4 Way 16A & DP', pkg: '10', type: 'PVC Board'},
      {catNo: 'MPSM68114', rating: '1+1 Way 32A & TPN', pkg: '30', type: 'PVC Board'},
      {catNo: 'MPSM68224', rating: '2+2 Way 32A & TPN', pkg: '20', type: 'PVC Board'},
      {catNo: 'MPSM68334', rating: '3+3 Way 32A & TPN', pkg: '14', type: 'PVC Board'},
      {catNo: 'MPSM68444', rating: '4+4 Way 32A & TPN', pkg: '10', type: 'PVC Board'}
    ]
  },
  {
    id: 54,
    title: 'PVC Socket + MCB Board (IP67 Waterproof)',
    category: 'Junctions & Push Buttons',
    image: prodImg54,
    description: 'IP67 fully waterproof distribution boards with ABS plastic casing and carrying handles, built to withstand outdoor industrial zones.',
    specs: ['IP67 Outdoor Waterproof Rating', 'High Impact Tough ABS body', 'Equipped with carrying handles', 'Resistant up to 80 degrees'],
    hsnCode: '85371000',
    models: [
      {catNo: 'PPSMIP6711', rating: '1 Socket + 4 SP MCB', pkg: '36', type: 'Waterproof Board'},
      {catNo: 'PPSMIP6721H', rating: '3 Socket + 4 SP MCB (H Type)', pkg: '20', type: 'Waterproof Board'},
      {catNo: 'PPSMIP6721', rating: '2 Socket + 8 SP MCB', pkg: '18', type: 'Waterproof Board'},
      {catNo: 'PPSMIP6741', rating: '4 Socket + 8 SP MCB', pkg: '9', type: 'Waterproof Board'},
      {catNo: 'PPSMIP6761', rating: '6 Socket + 12 SP MCB', pkg: '8', type: 'Waterproof Board'}
    ]
  },
  {
    id: 55,
    title: 'PVC Socket + SP MCB Handle Type Board',
    category: 'Junctions & Push Buttons',
    image: prodImg55,
    description: 'Metal board distribution box with convenient carrying handle, designed for single-phase PVC sockets and SP MCBs.',
    specs: ['20G Thick Metal Enclosure Enclosure', 'Carrying Handle Type layout', 'Shock Proof Coating Coating', 'Fits 4 to 8 PVC Sockets'],
    hsnCode: '85371000',
    models: [
      {catNo: 'MPSMH65408', rating: '4 Sockets + 8 SP MCBs', pkg: '14', type: 'Handle Board'},
      {catNo: 'MPSMH65610', rating: '6 Sockets + 10 SP MCBs', pkg: '10', type: 'Handle Board'},
      {catNo: 'MPSMH65812', rating: '8 Sockets + 12 SP MCBs', pkg: '10', type: 'Handle Board'}
    ]
  },
  {
    id: 56,
    title: 'PVC Socket + TPN MCB Handle Type Board',
    category: 'Junctions & Push Buttons',
    image: prodImg56,
    description: 'Heavy-duty carrying handle board configured for three-phase PVC industrial sockets and TPN MCB breakers.',
    specs: ['20G Solid Steel construction', 'Carrying Handle Type layout', 'Shock Proof Coating Coating', 'Fits 4 to 8 PVC Sockets'],
    hsnCode: '85371000',
    models: [
      {catNo: 'MPSMH65402', rating: '4 Sockets + TPN MCB', pkg: '14', type: 'Handle TPN Board'},
      {catNo: 'MPSMH65603', rating: '6 Sockets + TPN MCB', pkg: '10', type: 'Handle TPN Board'},
      {catNo: 'MPSMH65804', rating: '8 Sockets + TPN MCB', pkg: '10', type: 'Handle TPN Board'}
    ]
  },
  {
    id: 57,
    title: 'Metal Junction Board',
    category: 'Junctions & Push Buttons',
    image: prodImg57,
    description: 'Sturdy sheet-metal wiring junction enclosures designed with internal terminal mounts and knockouts for quick connections.',
    specs: ['Sturdy 22G Sheet Metal body', 'Shock-Proof Powder finish', 'Integrated grounding point screw', 'Removable top and bottom gland plates'],
    hsnCode: '85389000',
    models: [
      {catNo: 'MJB425', rating: '4 x 4 Inch Box', pkg: '60', type: 'Junction Box'},
      {catNo: 'MJB625', rating: '6 x 6 Inch Box', pkg: '40', type: 'Junction Box'},
      {catNo: 'MJB825', rating: '8 x 8 Inch Box', pkg: '30', type: 'Junction Box'}
    ]
  }
];

interface ProductShowcaseProps {
  showHeader?: boolean;
  onProductClick?: (id: number) => void;
}

const ProductShowcase = ({ showHeader = true, onProductClick }: ProductShowcaseProps) => {
  const [activeCategory, setActiveCategory] = useState('All Products');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [modalTab, setModalTab] = useState<'overview' | 'models'>('overview');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Form submission states
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formCompany, setFormCompany] = useState('');
  const [formQty, setFormQty] = useState('100');
  const [formModel, setFormModel] = useState('General Inquiry');
  const [formMessage, setFormMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const filteredProducts = productsData.filter(product => {
    const matchesCategory = activeCategory === 'All Products' || product.category === activeCategory;
    const matchesSearch = searchQuery.trim() === '' || 
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.hsnCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.specs.some(s => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (product.models && product.models.some(m => 
        m.catNo.toLowerCase().includes(searchQuery.toLowerCase()) || 
        (m.type && m.type.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (m.rating && m.rating.toLowerCase().includes(searchQuery.toLowerCase()))
      ));
    return matchesCategory && matchesSearch;
  });

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API request delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setIsSubmitted(false);
    setFormName('');
    setFormEmail('');
    setFormPhone('');
    setFormCompany('');
    setFormQty('100');
    setFormModel('General Inquiry');
    setFormMessage('');
  };

  return (
    <section id="products" className="py-20 bg-slate-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {showHeader && (
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-base text-brand-blue font-bold tracking-widest uppercase mb-2">
              Our Products
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
              Premium Industrial Switchgears & Accessories
            </h3>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
              Explore our complete range of electrical distribution components, fuses, switchgears, and plugs engineered for maximum safety and performance.
            </p>
          </div>
        )}

        {/* Categories Tab navigation bar and Search box container */}
        <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4 mb-10 pb-4 border-b border-slate-100">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-wide uppercase transition-all duration-300 cursor-pointer ${
                  activeCategory === category
                    ? 'bg-[#009DE1] text-white shadow-md shadow-[#009DE1]/20 -translate-y-0.5'
                    : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="relative min-w-[320px]">
            <input
              type="text"
              placeholder="Search by model, HSN, specs, or name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-4 pr-10 py-2 border border-slate-200 rounded-lg text-slate-800 text-xs sm:text-sm focus:outline-none focus:border-brand-blue shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Product Cards Static Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg border border-slate-100 shadow-sm overflow-hidden flex flex-col group hover:shadow-xl hover:border-slate-200 transition-all duration-300"
            >
              {/* Image Showcase Wrapper */}
              <div className="relative aspect-[4/3] bg-white flex items-center justify-center p-6 sm:p-8 overflow-hidden border-b border-slate-100">
                <img
                  src={product.image}
                  alt={product.title}
                  className="max-h-full max-w-full object-contain transform transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 bg-slate-900/5 text-slate-600 px-3 py-1 rounded-lg text-[10px] sm:text-xs font-semibold uppercase tracking-wider">
                  {product.category}
                </span>
              </div>

              {/* Text Description Box */}
              <div className="p-6 flex flex-col flex-grow text-left">
                <div className="flex justify-between items-start gap-2 mb-2">
                  <h4 className="text-base sm:text-lg font-semibold text-[#009DE1] font-sans tracking-tight mb-2 group-hover:text-brand-blue transition-colors duration-300">
                    {product.title}
                  </h4>
                  <span className="shrink-0 text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200 uppercase tracking-wide">
                    HSN: {product.hsnCode}
                  </span>
                </div>
                
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2">
                  {product.description}
                </p>

                {/* Bullet Specifications */}
                <div className="border-t border-slate-100 pt-4 mb-5 space-y-2">
                  {product.specs.slice(0, 2).map((spec, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00B7AC]"></span>
                      <span className="text-[10px] sm:text-xs font-medium text-slate-600">{spec}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Action Button - Triggers Modal popup or navigation */}
                <button
                  onClick={() => {
                    if (onProductClick) {
                      onProductClick(product.id);
                    } else {
                      setSelectedProduct(product);
                      setModalTab('overview');
                    }
                  }}
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 bg-slate-50 group-hover:bg-brand-blue group-hover:text-white text-slate-700 font-bold text-xs uppercase tracking-wider rounded-lg transition-all duration-300 group/btn cursor-pointer hover:-translate-y-0.5"
                >
                  Inquire Now
                  <Mail className="w-4 h-4 transition-transform duration-300 group-hover/btn:scale-110" />
                </button>
              </div>
            </div>
          ))}
          {filteredProducts.length === 0 && (
            <div className="col-span-full text-center py-12 text-slate-500">
              No products found matching your search.
            </div>
          )}
        </div>
      </div>

      {/* Inquiry Form Modal Window Popup */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 overflow-y-auto overflow-x-hidden flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300">
          <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-y-auto md:overflow-hidden flex flex-col md:flex-row border border-slate-100 animate-in fade-in zoom-in-95 duration-200 max-h-[90vh]">
            
            {/* Modal Close Anchor */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors duration-300 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Left Box: Product Details Showcase */}
            <div className="w-full md:w-[45%] bg-slate-50 p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-100 text-left">
              <div>
                <span className="text-[10px] font-bold text-slate-500 bg-slate-200 px-3 py-1 rounded-full uppercase tracking-widest">
                  {selectedProduct.category}
                </span>
                
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mt-4 mb-3">
                  {selectedProduct.title}
                </h3>
                <span className="inline-block text-[10px] font-bold text-slate-500 bg-white border border-slate-200 px-2 py-0.5 rounded mb-4 uppercase tracking-wider">
                  HSN CODE: {selectedProduct.hsnCode}
                </span>

                {/* Tab select bar */}
                <div className="flex border-b border-slate-200 mb-6 mt-2">
                  <button
                    onClick={() => setModalTab('overview')}
                    className={`pb-2.5 px-3 text-xs font-bold uppercase tracking-wider border-b-2 transition-all cursor-pointer ${
                      modalTab === 'overview'
                        ? 'border-brand-blue text-brand-blue'
                        : 'border-transparent text-slate-400 hover:text-slate-600'
                    }`}
                  >
                    Overview
                  </button>
                  {selectedProduct.models && selectedProduct.models.length > 0 && (
                    <button
                      onClick={() => setModalTab('models')}
                      className={`pb-2.5 px-3 text-xs font-bold uppercase tracking-wider border-b-2 transition-all cursor-pointer ${
                        modalTab === 'models'
                          ? 'border-brand-blue text-brand-blue'
                          : 'border-transparent text-slate-400 hover:text-slate-600'
                      }`}
                    >
                      Models & Ratings
                    </button>
                  )}
                </div>

                {modalTab === 'overview' ? (
                  <div className="space-y-4">
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                      {selectedProduct.description}
                    </p>

                    <div className="space-y-2">
                      {selectedProduct.specs.map((spec, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00B7AC]"></span>
                          <span className="text-xs font-medium text-slate-600">{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  /* Specs Models Table */
                  <div className="max-h-[300px] overflow-y-auto border border-slate-100 rounded-xl bg-white shadow-inner">
                    <table className="w-full text-left text-[11px] border-collapse">
                      <thead>
                        <tr className="bg-slate-50 text-slate-600 font-bold border-b border-slate-100 uppercase tracking-wider">
                          <th className="py-2 px-3">Cat. No.</th>
                          <th className="py-2 px-3">Rating</th>
                          {selectedProduct.models.some(m => m.poles) && <th className="py-2 px-3">Poles</th>}
                          {selectedProduct.models.some(m => m.volts) && <th className="py-2 px-3">Volts</th>}
                          {selectedProduct.models.some(m => m.pkg) && <th className="py-2 px-3">Pkg.</th>}
                        </tr>
                      </thead>
                      <tbody>
                        {selectedProduct.models.map(m => (
                          <tr key={m.catNo} className="hover:bg-slate-50 transition-colors border-b border-slate-50 text-slate-700 font-medium">
                            <td className="py-2 px-3 font-bold text-brand-blue">{m.catNo}</td>
                            <td className="py-2 px-3">{m.type || m.rating || '-'}</td>
                            {selectedProduct.models.some(m => m.poles) && <td className="py-2 px-3">{m.poles || '-'}</td>}
                            {selectedProduct.models.some(m => m.volts) && <td className="py-2 px-3">{m.volts || '-'}</td>}
                            {selectedProduct.models.some(m => m.pkg) && <td className="py-2 px-3">{m.pkg || '-'}</td>}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>

              <div className="mt-8 border-t border-slate-200 pt-6">
                <span className="text-[10px] font-bold text-slate-400 block uppercase mb-1">
                  Download catalogue
                </span>
                <a
                  href="/Shree_Product-Catalogue_2026.pdf"
                  download="Shree_Product-Catalogue_2026.pdf"
                  className="text-xs font-bold text-brand-blue hover:text-brand-blue/80 inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  Download Complete Catalogue PDF (20 Pages) &rarr;
                </a>
              </div>
            </div>

            {/* Right Box: Lead generation quotation form inputs */}
            <div className="w-full md:w-[55%] p-8 text-left bg-white flex flex-col justify-center">
              <h3 className="text-lg font-bold text-slate-800 tracking-tight mb-5">
                Quotation Inquiry Form
              </h3>

              {!isSubmitted ? (
                <form onSubmit={handleInquirySubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* prefills current product */}
                    <div>
                      <label className="block text-[10px] sm:text-xs font-bold text-slate-500 uppercase mb-1">
                        Inquiring For
                      </label>
                      <input
                        type="text"
                        disabled
                        value={selectedProduct.title}
                        className="w-full px-3 py-2 border border-slate-200 bg-slate-50 rounded-lg text-slate-700 text-xs sm:text-sm font-semibold cursor-not-allowed"
                      />
                    </div>
                    
                    {/* pre-filled model selection dropdown */}
                    <div>
                      <label className="block text-[10px] sm:text-xs font-bold text-slate-600 uppercase mb-1">
                        Select Model / Rating *
                      </label>
                      <select
                        required
                        value={formModel}
                        onChange={(e) => setFormModel(e.target.value)}
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 text-xs sm:text-sm focus:outline-none focus:border-brand-blue bg-white font-medium"
                      >
                        <option value="General Inquiry">General Inquiry (All Models)</option>
                        {selectedProduct.models && selectedProduct.models.map(m => (
                          <option key={m.catNo} value={m.catNo}>
                            {m.catNo} {m.rating ? `- ${m.rating}` : ''} {m.type ? `- ${m.type}` : ''}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] sm:text-xs font-bold text-slate-600 uppercase mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-brand-blue"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] sm:text-xs font-bold text-slate-600 uppercase mb-1">
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={formCompany}
                        onChange={(e) => setFormCompany(e.target.value)}
                        placeholder="Power Grid Corp"
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-brand-blue"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] sm:text-xs font-bold text-slate-600 uppercase mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formEmail}
                        onChange={(e) => setFormEmail(e.target.value)}
                        placeholder="john@example.com"
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-brand-blue"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] sm:text-xs font-bold text-slate-600 uppercase mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formPhone}
                        onChange={(e) => setFormPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-brand-blue"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] sm:text-xs font-bold text-slate-600 uppercase mb-1">
                      Estimated Order Quantity (Units) *
                    </label>
                    <input
                      type="number"
                      required
                      min="1"
                      value={formQty}
                      onChange={(e) => setFormQty(e.target.value)}
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 text-xs sm:text-sm focus:outline-none focus:border-brand-blue"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] sm:text-xs font-bold text-slate-600 uppercase mb-1">
                      Requirements / Message
                    </label>
                    <textarea
                      rows={3}
                      value={formMessage}
                      onChange={(e) => setFormMessage(e.target.value)}
                      placeholder="Please specify customization details or certifications required..."
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-brand-blue resize-none"
                    />
                  </div>

                  {/* Action submit button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-brand-blue hover:bg-brand-blue/95 disabled:bg-slate-300 text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-lg shadow-brand-blue/10 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    ) : (
                      <>
                        Submit Inquiry
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              ) : (
                /* Success Message State */
                <div className="flex flex-col items-center justify-center text-center p-6 space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500 mb-2">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h4 className="text-xl font-semibold text-slate-900 tracking-tight">
                    Inquiry Submitted!
                  </h4>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-[280px]">
                    Thank you, <strong>{formName}</strong>. Your request for <strong>{selectedProduct.title} ({formModel})</strong> has been logged. Our sales team will email you shortly.
                  </p>
                  <button
                    onClick={handleCloseModal}
                    className="px-6 py-2.5 border border-slate-200 hover:border-slate-300 text-slate-600 rounded-lg text-xs font-bold uppercase tracking-wider hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
                  >
                    Close Window
                  </button>
                </div>
              )}
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default ProductShowcase;
