import { useState } from 'react';
import { X, CheckCircle, ArrowRight, Zap, Flame, Plug, Grid, Boxes, GitMerge, Disc, Layers, Folder, Droplets, CircleDot, Cable, Wind, ChevronDown } from 'lucide-react';

// Import local assets
import ltControlReverseForwardSwitchImg from '../../assets/live_catalog_images/lt_control_reverse_forward_switch.png';
import ltControlReverseForwardSwitchSiemensImg from '../../assets/live_catalog_images/lt_control_reverse_forward_switch_siemens.png';
import compressorAutoPressureSwitchImg from '../../assets/live_catalog_images/compressor_auto_pressure_switch.png';
import benchGrinderRotarySwitchImg from '../../assets/live_catalog_images/bench_grinder_rotary_switch.png';
import threePhaseMctpMainSwitchImg from '../../assets/live_catalog_images/three_phase_mctp_main_switch.png';
import changeOverSwitchImg from '../../assets/live_catalog_images/change_over_switch.jpg';
import busBarChamberImg from '../../assets/live_catalog_images/bus_bar_chamber.jpg';
import shreeKitKatFuseKTypeImg from '../../assets/live_catalog_images/shree_porcelain_kit_kat_fuse_k_type.png';
import secoPorcelainKitKatFuseImg from '../../assets/live_catalog_images/seco_porcelain_kit_kat_fuse.png';
import secoPorcelainKitKatFuseHandleTypeImg from '../../assets/live_catalog_images/seco_porcelain_kit_kat_fuse_handle_type.png';
import weatherProofPlugSocketIp44BlueImg from '../../assets/live_catalog_images/weather_proof_plug_socket_ip44_blue.png';
import weatherProofPlugSocketIp44RedImg from '../../assets/live_catalog_images/weather_proof_plug_socket_ip44_red.png';
import weatherProofPlugSocketIp67BlueImg from '../../assets/live_catalog_images/weather_proof_plug_socket_ip67_blue.png';
import weatherProofPlugSocketIp67RedImg from '../../assets/live_catalog_images/weather_proof_plug_socket_ip67_red.png';
import weatherProof63aPlugSocketIp67Img from '../../assets/live_catalog_images/weather_proof_63a_plug_socket_ip67.png';
import metalCladPlugSocketImg from '../../assets/live_catalog_images/metal_clad_plug_socket.png';
import limitControlSwitchImg from '../../assets/live_catalog_images/limit_control_switch_silver_copper_rivet.png';
import metalEnclosureMcbDistributionBoardWithoutNeutralImg from '../../assets/live_catalog_images/metal_enclosure_mcb_distribution_board_without_neutral.png';
import metalEnclosureMcbDistributionBoardWithNeutralDeluxeImg from '../../assets/live_catalog_images/metal_enclosure_mcb_distribution_board_with_neutral_deluxe.png';
import metalMcbDistributionBoardSingleDoorSpnDeluxeImg from '../../assets/live_catalog_images/metal_mcb_distribution_board_single_door_spn_deluxe.png';
import metalMcbDistributionBoardSingleDoorSpnPremiumImg from '../../assets/live_catalog_images/metal_mcb_distribution_board_single_door_spn_premium.png';
import metalMcbDistributionBoardDoubleDoorSpnDeluxeImg from '../../assets/live_catalog_images/metal_mcb_distribution_board_double_door_spn_deluxe.png';
import metalMcbDistributionBoardDoubleDoorSpnMagneticImg from '../../assets/live_catalog_images/metal_mcb_distribution_board_double_door_spn_magnetic.png';
import metalMcbDistributionBoardDoubleDoorSpnPremiumImg from '../../assets/live_catalog_images/metal_mcb_distribution_board_double_door_spn_premium.png';
import whitelineMcbDistributionBoardDoubleDoorSpnImg from '../../assets/live_catalog_images/whiteline_mcb_distribution_board_double_door_spn.png';
import metalMcbDistributionBoardSingleDoorTpnPremiumImg from '../../assets/live_catalog_images/metal_mcb_distribution_board_single_door_tpn_premium.png';
import metalMcbDistributionBoardDoubleDoorTpnPremiumImg from '../../assets/live_catalog_images/metal_mcb_distribution_board_double_door_tpn_premium.png';
import metalMcbDistributionBoardDoubleDoorTpnMagneticImg from '../../assets/live_catalog_images/metal_mcb_distribution_board_double_door_tpn_magnetic.png';
import metalJunctionBoardImg from '../../assets/live_catalog_images/metal_junction_board.png';
import acBoxMetalSocketOnlyMetalBoardImg from '../../assets/live_catalog_images/ac_box_metal_socket_only_metal_board.png';
import acBoxPvcSocketOnlyMetalBoardImg from '../../assets/live_catalog_images/ac_box_pvc_socket_only_metal_board.png';
import industrialSocketDistributionBoardTopMountingImg from '../../assets/live_catalog_images/industrial_socket_distribution_board_top_mounting.png';
import industrialSocketDistributionBoardPvcTopMountingImg from '../../assets/live_catalog_images/industrial_socket_distribution_board_pvc_top_mounting.png';
import oneSocketOneMcbBoardDpTpnImg from '../../assets/live_catalog_images/one_socket_one_mcb_board_dp_tpn.png';
import twoSocketOneMcbBoardDpTpnImg from '../../assets/live_catalog_images/two_socket_one_mcb_board_dp_tpn.png';
import twoSocketTwoMcbBoardSpDpTpnImg from '../../assets/live_catalog_images/two_socket_two_mcb_board_sp_dp_tpn.png';
import threeSocketOneMcbBoardDpTpnImg from '../../assets/live_catalog_images/three_socket_one_mcb_board_dp_tpn.png';
import threeSocketThreeMcbBoardSpDpTpnImg from '../../assets/live_catalog_images/three_socket_three_mcb_board_sp_dp_tpn.png';
import fourSocketOneMcbBoardTpnImg from '../../assets/live_catalog_images/four_socket_one_mcb_board_tpn.png';
import fourSocketTwoMcbBoardDpTpnImg from '../../assets/live_catalog_images/four_socket_two_mcb_board_dp_tpn.png';
import fourSocketFourMcbBoardSpDpTpnImg from '../../assets/live_catalog_images/four_socket_four_mcb_board_sp_dp_tpn.png';
import sixSocketOneMcbBoardTpnImg from '../../assets/live_catalog_images/six_socket_one_mcb_board_tpn.png';
import sixSocketTwoMcbBoardTpnImg from '../../assets/live_catalog_images/six_socket_two_mcb_board_tpn.png';
import eightSocketOneMcbBoardTpnImg from '../../assets/live_catalog_images/eight_socket_one_mcb_board_tpn.png';
import eightSocketTwoMcbBoardTpnImg from '../../assets/live_catalog_images/eight_socket_two_mcb_board_tpn.png';
import oneSocketOneMcbBoardPvcSocketImg from '../../assets/live_catalog_images/one_socket_one_mcb_board_pvc_socket.png';
import twoSocketOneMcbBoardPvcSocketImg from '../../assets/live_catalog_images/two_socket_one_mcb_board_pvc_socket.png';
import twoSocketTwoMcbBoardPvcSocketImg from '../../assets/live_catalog_images/two_socket_two_mcb_board_pvc_socket.png';
import threeSocketOneMcbBoardPvcSocketImg from '../../assets/live_catalog_images/three_socket_one_mcb_board_pvc_socket.png';
import threeSocketThreeMcbBoardPvcSocketImg from '../../assets/live_catalog_images/three_socket_three_mcb_board_pvc_socket.png';
import shreeKitKatFuseHandleTypeImg from '../../assets/live_catalog_images/shree_porcelain_kit_kat_fuse_handle_type.png';
import liveImg12 from '../../assets/live_catalog_images/project_12.jpg';
import liveImg13 from '../../assets/live_catalog_images/project_13.jpg';
import liveImg14 from '../../assets/live_catalog_images/project_14.jpg';
import liveImg15 from '../../assets/live_catalog_images/project_15.jpg';
import liveImg16 from '../../assets/live_catalog_images/project_16.jpg';

export interface ProductModel {
  catNo: string;
  rating?: string;
  poles?: string;
  volts?: string;
  pkg?: string;
  type?: string;
  way?: string;
  size?: string;
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
  'Switch Gear',
  'Porcelain Kit Kat Fuse',
  'Industrial Plug & Socket',
  'SPN Metal MCB Distribution Board',
  'TPN Metal MCB Distribution Board',
  'Junction Board',
  'Industrial Socket Board',
  'Metal Socket + MCB Board',
  'PVC Socket + MCB Board',
  'IP67 PVC Socket + MCB Board',
  'Metal Push Button Board',
  'Bus Bar Chamber',
  'AC Box Metal Enclosure'
];

// Map of category names to their corresponding icons and styles for the UI
const categoryMeta = [
  {
    name: 'Switch Gear',
    icon: Zap,
    color: 'bg-amber-50 text-amber-500',
    image: ltControlReverseForwardSwitchImg,
    description: 'Robust LT control reverse-forward switches designed for heavy mechanical operations, featuring silver-point contacts and durable bakelite block base.',
    specs: ['16G Solid Metal Body', 'EC Grade Copper Contacts']
  },
  {
    name: 'Porcelain Kit Kat Fuse',
    icon: Flame,
    color: 'bg-orange-50 text-orange-500',
    image: shreeKitKatFuseKTypeImg,
    description: 'Standard ceramic porcelain kit-kat fuses (K-Type) designed with high mechanical dielectric strength and robust nickel-plated brass contacts.',
    specs: ['"WHITE" Porcelain Ceramic Body', 'Nickel Plated Brass Contacts']
  },
  {
    name: 'Industrial Plug & Socket',
    icon: Plug,
    color: 'bg-blue-50 text-blue-500',
    image: weatherProofPlugSocketIp44BlueImg,
    description: 'Weatherproof industrial plugs, sockets, and connectors with solid brass contact pins, suitable for harsh factory environments.',
    specs: ['IP44 & IP67 Splash-Proof', 'Heavy Nylon Impact Body']
  },
  {
    name: 'SPN Metal MCB Distribution Board',
    icon: Grid,
    color: 'bg-teal-50 text-teal-500',
    image: metalMcbDistributionBoardDoubleDoorSpnDeluxeImg,
    description: 'Compact sheet metal MCB enclosures and distribution boards for single-phase installations, finished with electrostatic powder coating.',
    specs: ['22G Solid Sheet Metal', 'Flush & Single Door Style']
  },
  {
    name: 'TPN Metal MCB Distribution Board',
    icon: Boxes,
    color: 'bg-emerald-50 text-emerald-500',
    image: metalMcbDistributionBoardDoubleDoorTpnPremiumImg,
    description: 'Three-phase distribution boards for heavy-duty industrial setups, featuring neutral links and protective shield plates.',
    specs: ['Double Door Safety Shield', 'Copper Phase Links']
  },
  {
    name: 'Junction Board',
    icon: GitMerge,
    color: 'bg-purple-50 text-purple-500',
    image: metalJunctionBoardImg,
    description: 'Sturdy sheet metal wiring junction enclosures designed with internal terminal mounts and knockouts for quick wiring links.',
    specs: ['22G Metal Body', 'Shock Proof Coating']
  },
  {
    name: 'Industrial Socket Board',
    icon: Disc,
    color: 'bg-indigo-50 text-indigo-500',
    image: industrialSocketDistributionBoardPvcTopMountingImg,
    description: 'Top mounting sheet metal industrial socket distribution boards engineered with 20G thick metal body and socket stand holes for Metal & PVC sockets.',
    specs: ['20G Thick Metal Body', 'Top Mounting Style']
  },
  {
    name: 'Metal Socket + MCB Board',
    icon: Layers,
    color: 'bg-cyan-50 text-cyan-500',
    image: oneSocketOneMcbBoardDpTpnImg,
    description: 'Heavy-duty distribution metal boards with customizable cutouts for industrial socket and MCB breaker configurations.',
    specs: ['20G Thick Metal Body', '1 Socket & 1 MCB Fit']
  },
  {
    name: 'PVC Socket + MCB Board',
    icon: Folder,
    color: 'bg-sky-50 text-sky-500',
    image: oneSocketOneMcbBoardPvcSocketImg,
    description: 'Heavy-duty sheet metal distribution boards designed with cutouts for industrial PVC socket outlets and MCB control switches.',
    specs: ['20G Thick Metal Body', 'Pre-fitted DIN Rails']
  },
  {
    name: 'IP67 PVC Socket + MCB Board',
    icon: Droplets,
    color: 'bg-cyan-50 text-cyan-500',
    image: liveImg14,
    description: 'IP67 fully waterproof outdoor socket boards with carrying handles, built to withstand outdoor industrial zones.',
    specs: ['IP67 Outdoor Waterproof', 'Carrying Handle Design']
  },
  {
    name: 'Metal Push Button Board',
    icon: CircleDot,
    color: 'bg-rose-50 text-rose-500',
    image: liveImg16,
    description: 'Sheet metal push-button station enclosures pre-punched with standard 22mm holes and finished with shock-proof coating.',
    specs: ['Standard 22mm Hole stations', 'Shock-Proof Paint Finish']
  },
  {
    name: 'Bus Bar Chamber',
    icon: Cable,
    color: 'bg-pink-50 text-pink-500',
    image: busBarChamberImg,
    description: 'Sleek and heavy-duty busbar chambers featuring solid electrolytic copper bars and insulated support blocks.',
    specs: ['Solid Electrolytic Copper Bars', 'Thick Gauge Steel Body']
  },
  {
    name: 'AC Box Metal Enclosure',
    icon: Wind,
    color: 'bg-sky-50 text-sky-600',
    image: acBoxMetalSocketOnlyMetalBoardImg,
    description: 'Compact air conditioner metal enclosures equipped with built-in plugs, sockets, and quick-fit DIN rails.',
    specs: ['22G Thick Metal Body', '1 Socket & 1 MCB Fit']
  }
];

export const productsData: Product[] = [
  {
    id: 1,
    title: 'L.T. Control Reverse Forward Switch',
    category: 'Switchgears & Fuses',
    image: ltControlReverseForwardSwitchImg,
    description: 'Robust LT control reverse-forwarding switches designed for heavy mechanical operations, featuring silver-point contacts and durable bakelite block base.',
    specs: ['16G Solid Metal Body', 'EC Grade Copper Contacts', 'P.F Moulding Bakelite Block', 'Electric Proof Coating'],
    hsnCode: '85365010',
    models: [
      { catNo: '16 SUNRISE', poles: '3', volts: '440', pkg: '50' },
      { catNo: '16 SUNRISE Deluxe', poles: '3', volts: '440', pkg: '60' },
      { catNo: '16 SHREE', poles: '3', volts: '440', pkg: '40' },
      { catNo: '32 SHREE', poles: '3', volts: '440', pkg: '40' }
    ]
  },
  {
    id: 2,
    title: 'L.T. Control Reverse Forward Switch (SIEMENS Type)',
    category: 'Switchgears & Fuses',
    image: ltControlReverseForwardSwitchSiemensImg,
    description: 'Siemens type reverse forward switch designed with a heavy dust-proof enclosure, silver-plated copper contacts, and a 360-degree rotating handle for industrial setups.',
    specs: ['SIEMENS Type Model design', 'Silver Point Metal Contacts', '360 Rotating steel Handle', 'Shock Proof Coating Finish'],
    hsnCode: '85365010',
    models: [
      { catNo: 'RFS4003', rating: '40 Amp', poles: '3 Pole', volts: '440V', pkg: '20', type: 'R/F' },
      { catNo: 'OFS4003', rating: '40 Amp', poles: '3 Pole', volts: '440V', pkg: '20', type: 'ON/OFF' },
      { catNo: 'RFSB4003', rating: '40 Amp (Big)', poles: '3 Pole', volts: '440V', pkg: '12', type: 'R/F' },
      { catNo: 'OFSB4003', rating: '40 Amp (Big)', poles: '3 Pole', volts: '440V', pkg: '12', type: 'ON/OFF' }
    ]
  },
  {
    id: 3,
    title: 'Compressor Auto Pressure Switch',
    category: 'Switchgears & Fuses',
    image: compressorAutoPressureSwitchImg,
    description: 'Pressure control switches designed for air compressor units, featuring silver-point electrical contacts and highly adjustable differential parameters.',
    specs: ['New Plastic Body Design', 'Silver Point Metal Contact', 'Connection Bakelite', 'Pressure & Diff. Adjustable'],
    hsnCode: '90322090',
    models: [
      { catNo: 'PR09', rating: '1-Port / 16A', volts: '220V', pkg: '50', type: 'Auto Switch' },
      { catNo: 'PR15', rating: '1-Port / 16A', volts: '220V', pkg: '50', type: 'Auto Switch' },
      { catNo: 'PRV09', rating: '1-Port / 16A (With Valve)', volts: '220V', pkg: '50', type: 'Auto Switch' },
      { catNo: 'PRV15', rating: '1-Port / 16A (With Valve)', volts: '220V', pkg: '50', type: 'Auto Switch' },
      { catNo: 'PR09X', rating: '4-Port / 16A', volts: '220V', pkg: '50', type: 'Auto Switch' },
      { catNo: 'PR15X', rating: '4-Port / 16A', volts: '220V', pkg: '50', type: 'Auto Switch' },
      { catNo: 'PRV09X', rating: '4-Port / 16A (With Valve)', volts: '220V', pkg: '50', type: 'Auto Switch' },
      { catNo: 'PRV15X', rating: '4-Port / 16A (With Valve)', volts: '220V', pkg: '50', type: 'Auto Switch' }
    ]
  },
  {
    id: 4,
    title: 'Bench Grinder Rotary Switch',
    category: 'Switchgears & Fuses',
    image: benchGrinderRotarySwitchImg,
    description: 'Premium glass-filled rotary switch configured for industrial bench grinding machines, ensuring robust circuit control and easy wiring setup.',
    specs: ['Nylon-6 Glass Field Material', 'EC Grade Copper Rivet', 'Dust Proof Body construction', 'Easy To Connect & Durable'],
    hsnCode: '85365010',
    models: [
      { catNo: 'GRS1602', rating: '16 Amp', poles: '2 Pole', volts: '240V', pkg: '100', type: 'Rotary Switch' },
      { catNo: 'GRS1603', rating: '16 Amp', poles: '3 Pole', volts: '440V', pkg: '100', type: 'Rotary Switch' },
      { catNo: 'GRS1003', rating: '10 Amp', poles: '3 Pole', volts: '440V', pkg: '100', type: 'Rotary Switch' }
    ]
  },
  {
    id: 5,
    title: 'Three Phase MCTP Main Switch (Sheet Metal)',
    category: 'Switchgears & Fuses',
    image: threePhaseMctpMainSwitchImg,
    description: 'Heavy duty sheet metal switchgears configured for three-phase main distribution networks, utilizing pure copper contacts and a quick-break mechanism.',
    specs: ['Heavy Thick Sheet Metal Body', 'Nickel Plated Brass Contacts', 'Pure Copper Top Contacts', 'Strong Metal Handle'],
    hsnCode: '85353090',
    models: [
      { catNo: 'MCTP1603', rating: '16 Amp', poles: '3 Pole', volts: '440V', pkg: '20', type: 'MCTP Main' },
      { catNo: 'MCTP3202', rating: '32 Amp (DP)', poles: '2 Pole', volts: '240V', pkg: '20', type: 'DP Main' },
      { catNo: 'MCTP3203', rating: '32 Amp', poles: '3 Pole', volts: '440V', pkg: '20', type: 'MCTP Main' },
      { catNo: 'MCTP6303', rating: '63 Amp', poles: '3 Pole', volts: '440V', pkg: '10', type: 'MCTP Main' },
      { catNo: 'MCTP10003', rating: '100 Amp', poles: '3 Pole', volts: '440V', pkg: '4', type: 'MCTP Main' },
      { catNo: 'MCTP20003', rating: '200 Amp', poles: '3 Pole', volts: '440V', pkg: '2', type: 'MCTP Main' }
    ]
  },
  {
    id: 6,
    title: 'Change Over Switch (Sheet Metal)',
    category: 'Switchgears & Fuses',
    image: changeOverSwitchImg,
    description: 'Double throw manual changeover switches designed with thick enclosures, nickel-plated brass and copper contacts for seamless load transfer.',
    specs: [
      'Heavy Thick Sheet Metal Body',
      'Nickel Plated Brass Connection Contacts',
      'EC Grade Copper Top Contacts',
      'PB Bronze Copper Bottom Contacts',
      'Metal Handle with Quick Break Mechanism',
      'Easy For Connection & Operate',
      'Loose Spares Available'
    ],
    hsnCode: '85371000',
    models: [
      { catNo: 'COS3202', rating: '32 Amp', poles: '2 Pole', volts: '250V', pkg: '6', type: 'Change Over' },
      { catNo: 'COS3204', rating: '32 Amp', poles: '4 Pole', volts: '415V', pkg: '6', type: 'Change Over' },
      { catNo: 'COS6302', rating: '63 Amp', poles: '2 Pole', volts: '250V', pkg: '6', type: 'Change Over' },
      { catNo: 'COS6304', rating: '63 Amp', poles: '4 Pole', volts: '415V', pkg: '4', type: 'Change Over' },
      { catNo: 'COS10004', rating: '100 Amp', poles: '4 Pole', volts: '415V', pkg: '2', type: 'Change Over' },
      { catNo: 'COS20004', rating: '200 Amp', poles: '4 Pole', volts: '415V', pkg: '1', type: 'Change Over' }
    ]
  },
  {
    id: 7,
    title: 'Bus Bar Chamber',
    category: 'Switchgears & Fuses',
    image: busBarChamberImg,
    description: 'Sleek and heavy-duty busbar chambers featuring solid copper bars and insulated supports, ideal for multi-connection power distribution systems.',
    specs: ['Thick Gauge Steel Body Enclosure', 'Solid Electrolytic Copper Bars', 'Superior Insulation Block base', 'Removable Gland Plates'],
    hsnCode: '85371000',
    models: [
      { catNo: 'BBC903', rating: '32AMP Copper (9" x 12" x 3")', poles: '4', volts: '415V', pkg: '8' },
      { catNo: 'BBC906', rating: '63AMP Copper (9" x 12" x 3")', poles: '4', volts: '415V', pkg: '8' },
      { catNo: 'BBC1206', rating: '63AMP Copper (12" x 15" x 4")', poles: '4', volts: '415V', pkg: '4' },
      { catNo: 'BBC1210', rating: '100AMP Copper (12" x 15" x 4")', poles: '4', volts: '415V', pkg: '4' },
      { catNo: 'BBC1220', rating: '200AMP Copper (12" x 15" x 4")', poles: '4', volts: '415V', pkg: '4' },
      { catNo: 'BBC1510', rating: '100AMP Copper (15" x 18" x 6")', poles: '4', volts: '415V', pkg: '3' },
      { catNo: 'BBC1520', rating: '200AMP Copper (15" x 18" x 6")', poles: '4', volts: '415V', pkg: '3' },
      { catNo: 'BBC1530', rating: '300AMP Copper (15" x 18" x 6")', poles: '4', volts: '415V', pkg: '3' },
      { catNo: 'BBC1540', rating: '400AMP Copper (15" x 18" x 6")', poles: '4', volts: '415V', pkg: '3' },
      { catNo: 'BBC1820', rating: '200AMP Copper (18" x 24" x 6")', poles: '4', volts: '415V', pkg: '2' },
      { catNo: 'BBC1830', rating: '300AMP Copper (18" x 24" x 6")', poles: '4', volts: '415V', pkg: '2' },
      { catNo: 'BBC1840', rating: '400AMP Copper (18" x 24" x 6")', poles: '4', volts: '415V', pkg: '2' },
      { catNo: 'BBC1860', rating: '600AMP Copper (18" x 24" x 6")', poles: '4', volts: '415V', pkg: '2' },
      { catNo: 'BBC12B', rating: 'Only Box (12" x 15" x 4")', poles: '4', volts: '415V', pkg: '4' },
      { catNo: 'BBC15B', rating: 'Only Box (15" x 18" x 6")', poles: '4', volts: '415V', pkg: '3' },
      { catNo: 'BBC18B', rating: 'Only Box (18" x 24" x 6")', poles: '4', volts: '415V', pkg: '1' }
    ]
  },
  {
    id: 8,
    title: '"SHREE" Porcelain Kit Kat Fuse (K-Type)',
    category: 'Switchgears & Fuses',
    image: shreeKitKatFuseKTypeImg,
    description: 'Premium "WHITE" porcelain ceramic kit-kat fuses (K-Type) designed with high mechanical dielectric strength, EC grade copper contacts, and PB bronze clamps.',
    specs: [
      '"WHITE" Porcelain Ceramic Body',
      'Nickel Plated Brass Connection Contacts',
      'EC Grade Top Copper Contacts',
      'PB Bronze Bottom Clamps',
      'Connection S.S Screws',
      'Easy For Connection & Durable'
    ],
    hsnCode: '85365010',
    models: [
      { catNo: 'FSRK16', rating: '16 Amp', volts: '415V', pkg: '72', type: 'K-Type' },
      { catNo: 'FSRK32', rating: '32 Amp', volts: '415V', pkg: '60', type: 'K-Type' },
      { catNo: 'FSRK63', rating: '63 Amp', volts: '415V', pkg: '36', type: 'K-Type' }
    ]
  },
  {
    id: 9,
    title: '"SHREE" Porcelain Kit Kat Fuse (New Handle Type) Copper + PB',
    category: 'Switchgears & Fuses',
    image: shreeKitKatFuseHandleTypeImg,
    description: 'Heavy amperage "WHITE" porcelain fuse carrier blocks equipped with strong handle locks, EC grade copper top contacts, and PB bronze bottom clamps with S.S. lugs.',
    specs: [
      '"WHITE" Porcelain Ceramic Body',
      'Nickel Plated Brass Connection Contacts',
      'EC Grade Top Copper Contacts',
      'PB Bronze Bottom Clamps',
      'Connection S.S Screws',
      'Lug : Screw & Washer S.S.',
      'Easy For Connection & Durable'
    ],
    hsnCode: '85365010',
    models: [
      { catNo: 'FSRH63', rating: '63 Amp', volts: '415V', pkg: '24', type: 'Handle Type' },
      { catNo: 'FSRH63L', rating: '63 Amp', volts: '415V', pkg: '24', type: 'Handle with Lug' },
      { catNo: 'FSRH100', rating: '100 Amp', volts: '415V', pkg: '12', type: 'Handle Type' },
      { catNo: 'FSRH100L', rating: '100 Amp', volts: '415V', pkg: '12', type: 'Handle with Lug' },
      { catNo: 'FSRH200', rating: '200 Amp', volts: '415V', pkg: '9', type: 'Handle Type' },
      { catNo: 'FSRH200L', rating: '200 Amp', volts: '415V', pkg: '9', type: 'Handle with Lug' }
    ]
  },
  {
    id: 10,
    title: '"SECO" Porcelain Kit Kat Fuse',
    category: 'Switchgears & Fuses',
    image: secoPorcelainKitKatFuseImg,
    description: 'Premium "CREAM" porcelain ceramic kit-kat fuses (SECO Type) engineered with EC grade copper contacts, nickel plated brass clamps, and durable M.S. screws for heavy-duty electrical protection.',
    specs: [
      '"CREAM" Porcelain Ceramic Body',
      'Nickel Plated Brass Connection Contacts',
      'EC Grade Top Copper Contacts',
      'Nickel Plated Brass Bottom Clamps',
      'Nickel Plated Connection M.S. Screws',
      'Easy For Connection & Durable'
    ],
    hsnCode: '85365010',
    models: [
      { catNo: 'FSEK16', rating: '16 Amp', volts: '415V', pkg: '72', type: 'K-Type' },
      { catNo: 'FSEK32', rating: '32 Amp', volts: '415V', pkg: '60', type: 'K-Type' },
      { catNo: 'FSEK63', rating: '63 Amp', volts: '415V', pkg: '36', type: 'K-Type' }
    ]
  },
  {
    id: 58,
    title: '"SECO" Porcelain Kit Kat Fuse (Handle Type) Copper + Brass',
    category: 'Switchgears & Fuses',
    image: secoPorcelainKitKatFuseHandleTypeImg,
    description: 'Heavy amperage "CREAM" porcelain fuse carrier blocks equipped with leverage handle grips, EC grade copper top contacts, and nickel-plated brass clamps.',
    specs: [
      '"CREAM" Porcelain Ceramic Body',
      'Nickel Plated Brass Connection Contacts',
      'EC Grade Top Copper Contacts',
      'Nickel Plated Brass Bottom Clamps',
      'Nickel Plated Connection M.S. Screws',
      'Lug : Screw & Washer M.S. (With Zinc)',
      'Easy For Connection & Durable'
    ],
    hsnCode: '85365010',
    models: [
      { catNo: 'FSEH63', rating: '63 Amp', volts: '415V', pkg: '30', type: 'Handle Type' },
      { catNo: 'FSEH63L', rating: '63 Amp', volts: '415V', pkg: '30', type: 'Handle with Lug' },
      { catNo: 'FSEH100', rating: '100 Amp', volts: '415V', pkg: '12', type: 'Handle Type' },
      { catNo: 'FSEH100L', rating: '100 Amp', volts: '415V', pkg: '12', type: 'Handle with Lug' },
      { catNo: 'FSEH200', rating: '200 Amp', volts: '415V', pkg: '9', type: 'Handle Type' },
      { catNo: 'FSEH200L', rating: '200 Amp', volts: '415V', pkg: '9', type: 'Handle with Lug' },
      { catNo: 'FSEH500L', rating: '500 Amp', volts: '415V', pkg: '6', type: 'Handle with Lug' }
    ]
  },
  {
    id: 11,
    title: 'Weather-Proof Plug & Socket (IP44 - Blue 250V)',
    category: 'Plugs & Sockets',
    image: weatherProofPlugSocketIp44BlueImg,
    description: 'High-performance IP44 single-phase weather-proof plugs and sockets (250V, 16A & 32A) featuring flame-retardant plastic material, brass pins, and spring safety covers.',
    specs: [
      'Weather-Proof Plug & Socket (IP44)',
      'Plastic Material Body',
      'Solid Brass Contact Pins',
      'Protective Spring Safety Covers',
      'Flame Retardant & Heat Resistant',
      'Highly Conductive Contacts',
      'Easy For Connection & Use'
    ],
    hsnCode: '85365010',
    models: [
      { catNo: 'PIP44013', rating: '16A.x3Pin', volts: '250V', pkg: '150', type: 'Plug (16A x 3-Pin)' },
      { catNo: 'PIP44213', rating: '16A.x3Pin', volts: '250V', pkg: '150', type: 'Straight Socket (16A x 3-Pin)' },
      { catNo: 'PIP44313', rating: '16A.x3Pin', volts: '250V', pkg: '200', type: 'Panel Socket (16A x 3-Pin)' },
      { catNo: 'PIP44113', rating: '16A.x3Pin', volts: '250V', pkg: '100', type: 'Wall Socket (16A x 3-Pin)' },
      { catNo: 'PIP44023', rating: '32A.x3Pin', volts: '250V', pkg: '100', type: 'Plug (32A x 3-Pin)' },
      { catNo: 'PIP44223', rating: '32A.x3Pin', volts: '250V', pkg: '100', type: 'Straight Socket (32A x 3-Pin)' },
      { catNo: 'PIP44323', rating: '32A.x3Pin', volts: '250V', pkg: '100', type: 'Panel Socket (32A x 3-Pin)' },
      { catNo: 'PIP44123', rating: '32A.x3Pin', volts: '250V', pkg: '100', type: 'Wall Socket (32A x 3-Pin)' },
      { catNo: 'PIP441013', rating: '16A.x3Pin', volts: '250V', pkg: '20', type: 'Multi-Socket (16A x 3-Pin)' }
    ]
  },
  {
    id: 12,
    title: 'Weather-Proof Plug & Socket (IP44 - Red 440V)',
    category: 'Plugs & Sockets',
    image: weatherProofPlugSocketIp44RedImg,
    description: 'Heavy-duty IP44 three-phase weather-proof plugs and sockets (440V, 16A & 32A) engineered for industrial machinery with flame-retardant housing and brass pins.',
    specs: [
      'Weather-Proof Plug & Socket (IP44)',
      'Plastic Material Body',
      'Solid Brass Contact Pins',
      'Protective Spring Safety Covers',
      'Flame Retardant & Heat Resistant',
      'Highly Conductive Contacts',
      'Easy For Connection & Use'
    ],
    hsnCode: '85385810',
    models: [
      { catNo: 'PIP44015', rating: '16A.x5Pin', volts: '440V', pkg: '100', type: 'Plug (16A x 5-Pin)' },
      { catNo: 'PIP44215', rating: '16A.x5Pin', volts: '440V', pkg: '100', type: 'Straight Socket (16A x 5-Pin)' },
      { catNo: 'PIP44315', rating: '16A.x5Pin', volts: '440V', pkg: '100', type: 'Panel Socket (16A x 5-Pin)' },
      { catNo: 'PIP44115', rating: '16A.x5Pin', volts: '440V', pkg: '100', type: 'Wall Socket (16A x 5-Pin)' },
      { catNo: 'PIP44025', rating: '32A.x5Pin', volts: '440V', pkg: '100', type: 'Plug (32A x 5-Pin)' },
      { catNo: 'PIP44225', rating: '32A.x5Pin', volts: '440V', pkg: '100', type: 'Straight Socket (32A x 5-Pin)' },
      { catNo: 'PIP44325', rating: '32A.x5Pin', volts: '440V', pkg: '100', type: 'Panel Socket (32A x 5-Pin)' },
      { catNo: 'PIP44125', rating: '32A.x5Pin', volts: '440V', pkg: '100', type: 'Wall Socket (32A x 5-Pin)' },
      { catNo: 'PIP441025', rating: '32A.x5Pin', volts: '440V', pkg: '20', type: 'Multi-Socket (32A x 5-Pin)' }
    ]
  },
  {
    id: 13,
    title: 'Weather-Proof IP44 Industrial Connector',
    category: 'Plugs & Sockets',
    image: liveImg14,
    description: 'IP44 inline coupler connectors with cable strain relief clamps, providing safe extension links in damp environments.',
    specs: ['IP44 Strain Relief Coupler', 'Double Cable Grip Gasket', 'Nickel Plated Pin Sleeves', 'Industrial Extension Friendly'],
    hsnCode: '85366990',
    models: [
      { catNo: 'PIC44013', rating: '16A / 3-Pin', poles: '2P+E', volts: '240V', pkg: '100', type: 'IP44 Connector' },
      { catNo: 'PIC44015', rating: '16A / 5-Pin', poles: '3P+N+E', volts: '415V', pkg: '60', type: 'IP44 Connector' },
      { catNo: 'PIC44023', rating: '32A / 3-Pin', poles: '2P+E', volts: '240V', pkg: '60', type: 'IP44 Connector' },
      { catNo: 'PIC44025', rating: '32A / 5-Pin', poles: '3P+N+E', volts: '415V', pkg: '40', type: 'IP44 Connector' }
    ]
  },
  {
    id: 14,
    title: 'Weather-Proof Plug & Socket (IP67 - Blue 250V)',
    category: 'Plugs & Sockets',
    image: weatherProofPlugSocketIp67BlueImg,
    description: 'High-protection IP67 waterproof single-phase industrial plugs, straight sockets, panel sockets, and wall sockets (250V, 16A & 32A) featuring secure threaded locking rings and watertight sealing collars.',
    specs: [
      'Weather-Proof Plug & Socket (IP67)',
      'Plastic Material Body',
      'Solid Brass Contact Pins',
      'Threaded Locking Ring with Protective Covers',
      'Watertight Gasket Seals (IP67 Class)',
      'Flame Retardant & Impact Resistant',
      'Easy For Connection & Use'
    ],
    hsnCode: '85365010',
    models: [
      { catNo: 'PIP670132', rating: '16A.x3Pin', volts: '250V', pkg: '150', type: 'Plug (16A x 3-Pin)' },
      { catNo: 'PIP672132', rating: '16A.x3Pin', volts: '250V', pkg: '150', type: 'Straight Socket (16A x 3-Pin)' },
      { catNo: 'PIP673132', rating: '16A.x3Pin', volts: '250V', pkg: '200', type: 'Panel Socket (16A x 3-Pin)' },
      { catNo: 'PIP671132', rating: '16A.x3Pin', volts: '250V', pkg: '100', type: 'Wall Socket (16A x 3-Pin)' }
    ]
  },
  {
    id: 15,
    title: 'Weather-Proof Plug & Socket (IP67 - Red 415V)',
    category: 'Plugs & Sockets',
    image: weatherProofPlugSocketIp67RedImg,
    description: 'Industrial IP67 three-phase waterproof plugs, straight sockets, panel sockets, and wall sockets (415V, 32A) engineered for wet and heavy industrial conditions with heavy-duty brass pins and screw locking rings.',
    specs: [
      'Weather-Proof Plug & Socket (IP67)',
      'Plastic Material Body',
      'Solid Brass Contact Pins',
      'Threaded Locking Collar & Protective Cap',
      'Watertight Gasket Protection (IP67 Class)',
      'Flame Retardant & High Dielectric Strength',
      'Easy For Connection & Use'
    ],
    hsnCode: '85365010',
    models: [
      { catNo: 'PIP670252', rating: '32A.x5Pin', volts: '415V', pkg: '150', type: 'Plug (32A x 5-Pin)' },
      { catNo: 'PIP672252', rating: '32A.x5Pin', volts: '415V', pkg: '150', type: 'Straight Socket (32A x 5-Pin)' },
      { catNo: 'PIP673252', rating: '32A.x5Pin', volts: '415V', pkg: '200', type: 'Panel Socket (32A x 5-Pin)' },
      { catNo: 'PIP671252', rating: '32A.x5Pin', volts: '415V', pkg: '100', type: 'Wall Socket (32A x 5-Pin)' }
    ]
  },
  {
    id: 16,
    title: 'Weather-Proof 63Amp. Plug & Socket (IP67)',
    category: 'Plugs & Sockets',
    image: weatherProof63aPlugSocketIp67Img,
    description: 'Heavy-duty 63A IP67 weather-proof industrial plugs and sockets (415V, 5-Pin) built with flame-retardant engineered plastic, pilot safety contacts, and rugged screw-collar sealing for high-power machinery.',
    specs: [
      'Weather-Proof Plug & Socket (IP67)',
      '63A Heavy-Duty High Power Rating',
      'High Grade Flame Retardant Plastic Body',
      'Solid Brass Pins with Pilot Contact',
      'Watertight Locking Ring & Protective Covers',
      'Heavy Gasket Seals (IP67 Class)',
      'Easy For Connection & Heavy Industrial Use'
    ],
    hsnCode: '85365010',
    models: [
      { catNo: 'PIP67035', rating: '63A.x5Pin', volts: '415V', pkg: '50', type: 'Plug (63A x 5-Pin)' },
      { catNo: 'PIP67235', rating: '63A.x5Pin', volts: '415V', pkg: '50', type: 'Straight Socket (63A x 5-Pin)' },
      { catNo: 'PIP67325', rating: '63A.x5Pin', volts: '415V', pkg: '50', type: 'Panel Socket (63A x 5-Pin)' },
      { catNo: 'PIP67135', rating: '63A.x5Pin', volts: '415V', pkg: '50', type: 'Wall Socket (63A x 5-Pin)' }
    ]
  },
  {
    id: 17,
    title: 'Metal Clad Plug & Socket',
    category: 'Plugs & Sockets',
    image: metalCladPlugSocketImg,
    description: 'Industrial metal-clad plugs and sockets engineered with heavy electric-grade aluminum housing, solid brass contact pins, EC grade copper contacts, and heat-resistant PF moulding bakelite block.',
    specs: [
      'Electric Grade Aluminum Body',
      'Solid Brass Pins & EC Grade Copper Contacts',
      'P.F. Moulding Bakelite Pin Block (55 kV/mm)',
      'Electric Proof Shock Resistant Coating',
      'Safety Grounding Metal Chain & Cover',
      'Easy For Connection & Mounting'
    ],
    hsnCode: '85365010',
    models: [
      { catNo: 'MCP202', rating: '20A x 2 Pole', volts: '250V', pkg: '200', type: 'Metal Clad Plug' },
      { catNo: 'MCS202', rating: '20A x 2 Pole', volts: '250V', pkg: '150', type: 'Metal Clad Socket' },
      { catNo: 'MCP203', rating: '20A x 3 Pole', volts: '440V', pkg: '180', type: 'Metal Clad Plug' },
      { catNo: 'MCS203', rating: '20A x 3 Pole', volts: '440V', pkg: '120', type: 'Metal Clad Socket' },
      { catNo: 'MCP303', rating: '30A x 3 Pole', volts: '440V', pkg: '80', type: 'Metal Clad Plug' },
      { catNo: 'MCS303', rating: '30A x 3 Pole', volts: '440V', pkg: '80', type: 'Metal Clad Socket' }
    ]
  },
  {
    id: 19,
    title: 'Limit Control Switch (Silver Copper Rivet)',
    category: 'Switchgears & Fuses',
    image: limitControlSwitchImg,
    description: 'Industrial limit control switches equipped with cast aluminium body, metal cover, shock-proof powder coating, silver point contacts, and durable nylon base roller for precision machinery and automation.',
    specs: [
      'Aluminium Body & Metal Cover',
      'Shock Proof Powder Coating',
      'Silver Point Metal Contacts',
      'Nylon Material Base Roller',
      '10 Amp - 500V Rating',
      '1 NO - 1 NC Action',
      'Easy For Connection & High Durability'
    ],
    hsnCode: '85365010',
    models: [
      { catNo: 'LCS1501', rating: '10 Amp', volts: '500V', pkg: '100', type: 'LSR Normal Action' },
      { catNo: 'LCS1502', rating: '10 Amp', volts: '500V', pkg: '100', type: 'LSRS Snap Action' },
      { catNo: 'LCS1503', rating: '10 Amp', volts: '500V', pkg: '100', type: 'Element-LSR Normal Action' },
      { catNo: 'LCS1504', rating: '10 Amp', volts: '500V', pkg: '100', type: 'Element-LSRS Snap Action' }
    ]
  },
  {
    id: 20,
    title: 'Industrial Socket Distribution Board Top Mounting (Metal Socket)',
    category: 'Plugs & Sockets',
    image: industrialSocketDistributionBoardTopMountingImg,
    description: 'Heavy-duty sheet metal industrial socket distribution board with top mounting design and pre-drilled metal socket stand holes. Manufactured with 20G thick metal body and shock proof coating for reliable, safe factory power connections.',
    specs: [
      '20G Thick Metal Body',
      'Shock Proof Coating',
      'Top Mounting',
      'Metal Socket Stand Holes are Given'
    ],
    hsnCode: '85371000',
    models: [
      { catNo: 'MSBT6201', size: '1 - Socket Metal', rating: '20/3', pkg: '50' },
      { catNo: 'MSBT6202', size: '2 - Socket Metal', rating: '20/3', pkg: '30' },
      { catNo: 'MSBT6203', size: '3 - Socket Metal', rating: '20/3', pkg: '20' },
      { catNo: 'MSBT6204', size: '4 - Socket Metal', rating: '20/3', pkg: '20' },
      { catNo: 'MSBT6211', size: '1 - Socket Metal', rating: '20/2 - 30/3', pkg: '50' },
      { catNo: 'MSBT6222', size: '2 - Socket Metal', rating: '20/2 - 30/3', pkg: '30' },
      { catNo: 'MSBT6233', size: '3 - Socket Metal', rating: '20/2 - 30/3', pkg: '20' },
      { catNo: 'MSBT6244', size: '4 - Socket Metal', rating: '20/2 - 30/3', pkg: '20' }
    ]
  },
  {
    id: 60,
    title: 'Industrial Socket Distribution Board Top Mounting (PVC Socket)',
    category: 'Plugs & Sockets',
    image: industrialSocketDistributionBoardPvcTopMountingImg,
    description: 'Heavy-duty sheet metal industrial socket distribution board with top mounting design and stand holes engineered for PVC IP44 weather-proof sockets. Manufactured with 20G thick metal body and shock proof coating for safe, high-load connections.',
    specs: [
      '20G Thick Metal Body',
      'Shock Proof Coating',
      'Top Mounting',
      'PVC IP44Socket Stand Holes are Given'
    ],
    hsnCode: '85371000',
    models: [
      { catNo: 'PSBT6401', size: '1 - Socket PVC', rating: '16/3 to 32/5', pkg: '50' },
      { catNo: 'PSBT6402', size: '2 - Socket PVC', rating: '16/3 to 32/5', pkg: '30' },
      { catNo: 'PSBT6403', size: '3 - Socket PVC', rating: '16/3 to 32/5', pkg: '20' },
      { catNo: 'PSBT6404', size: '4 - Socket PVC', rating: '16/3 to 32/5', pkg: '20' }
    ]
  },
  {
    id: 21,
    title: 'Metal Enclosure MCB Distribution Board (Without Neutral Busbar & Phase Link)',
    category: 'Distribution Boards',
    image: metalEnclosureMcbDistributionBoardWithoutNeutralImg,
    description: 'Heavy 22G sheet metal MCB enclosures designed for standard SP and DP miniature circuit breakers, featuring shock-proof electrostatic powder coating, topside removable plates, and removable MCB channel.',
    specs: [
      '22G Thick Metal Body',
      'Shock Proof Coating',
      '1/2 & 3/4 Way Small, 4 to 16 Way Big',
      'Without Neutral Busbar Link',
      'Topside Plate Removable',
      'MCB Channel Removable',
      'Dust Guard Included'
    ],
    hsnCode: '85371000',
    models: [
      { catNo: 'MEB102', rating: '1 / 2 (Small)', volts: '250V', pkg: '90', type: 'Metal Enclosure' },
      { catNo: 'MEB304', rating: '3 / 4 (Small)', volts: '250V', pkg: '60', type: 'Metal Enclosure' },
      { catNo: 'MEB04', rating: '4 Way', volts: '250V', pkg: '50', type: 'Metal Enclosure' },
      { catNo: 'MEB06', rating: '6 Way', volts: '250V', pkg: '40', type: 'Metal Enclosure' },
      { catNo: 'MEB08', rating: '8 Way', volts: '250V', pkg: '32', type: 'Metal Enclosure' },
      { catNo: 'MEB10', rating: '10 Way', volts: '250V', pkg: '26', type: 'Metal Enclosure' },
      { catNo: 'MEB12', rating: '12 Way', volts: '250V', pkg: '25', type: 'Metal Enclosure' },
      { catNo: 'MEB16', rating: '16 Way', volts: '250V', pkg: '20', type: 'Metal Enclosure' }
    ]
  },
  {
    id: 59,
    title: 'Metal Enclosure MCB Distribution Board (With Neutral Busbar & Dummy Plate)',
    category: 'Distribution Boards',
    image: metalEnclosureMcbDistributionBoardWithNeutralDeluxeImg,
    description: 'Deluxe sheet metal MCB enclosures equipped with an integrated brass neutral busbar link, dummy protective plates, topside removable plate, and durable 22G metal body.',
    specs: [
      '22G Thick Metal Body',
      'Shock Proof Coating',
      'With Neutral Busbar Link',
      'With Dummy Plate Included',
      'Topside Plate Removable',
      'MCB Channel Removable',
      'Dust Guard Included'
    ],
    hsnCode: '85371000',
    models: [
      { catNo: 'MEDB04', rating: '4 Way', volts: '250V', pkg: '50', type: 'Enclosure Deluxe' },
      { catNo: 'MEDB06', rating: '6 Way', volts: '250V', pkg: '40', type: 'Enclosure Deluxe' },
      { catNo: 'MEDB08', rating: '8 Way', volts: '250V', pkg: '32', type: 'Enclosure Deluxe' },
      { catNo: 'MEDB10', rating: '10 Way', volts: '250V', pkg: '26', type: 'Enclosure Deluxe' },
      { catNo: 'MEDB12', rating: '12 Way', volts: '250V', pkg: '25', type: 'Enclosure Deluxe' },
      { catNo: 'MEDB16', rating: '16 Way', volts: '250V', pkg: '20', type: 'Enclosure Deluxe' }
    ]
  },
  {
    id: 22,
    title: 'Metal MCB Distribution Board (Single Door - SPN) DELUXE',
    category: 'Distribution Boards',
    image: metalMcbDistributionBoardSingleDoorSpnDeluxeImg,
    description: 'Deluxe single door SPN distribution boards featuring 22G thick metal chassis, shock-proof electrostatic coating, pre-installed brass neutral busbar link, removable MCB channel, and protective dummy plates.',
    specs: [
      '22G Thick Metal Body',
      'Shock Proof Coating',
      'With Neutral Busbar Link',
      'With Dummy Plate Included',
      'Topside Plate Removable',
      'MCB Channel Removable',
      'Dust Guard Included'
    ],
    hsnCode: '85371000',
    models: [
      { catNo: 'MSSD04', rating: '4 Way', volts: '250V', pkg: '50', type: 'Single Door Deluxe' },
      { catNo: 'MSSD06', rating: '6 Way', volts: '250V', pkg: '40', type: 'Single Door Deluxe' },
      { catNo: 'MSSD08', rating: '8 Way', volts: '250V', pkg: '32', type: 'Single Door Deluxe' },
      { catNo: 'MSSD10', rating: '10 Way', volts: '250V', pkg: '26', type: 'Single Door Deluxe' },
      { catNo: 'MSSD12', rating: '12 Way', volts: '250V', pkg: '25', type: 'Single Door Deluxe' },
      { catNo: 'MSSD16', rating: '16 Way', volts: '250V', pkg: '20', type: 'Single Door Deluxe' }
    ]
  },
  {
    id: 26,
    title: 'Metal MCB Distribution Board (Single Door - SPN) PREMIUM',
    category: 'Distribution Boards',
    image: metalMcbDistributionBoardSingleDoorSpnPremiumImg,
    description: 'Premium single door SPN distribution boards featuring 22G thick metal chassis, pure copper face/phase link, solid brass neutral busbar link, removable topside plate, and dummy plate.',
    specs: [
      '22G Thick Metal Body',
      'Shock Proof Coating',
      'With Neutral Busbar Link',
      'With Copper Face / Phase Link',
      'Topside Plate Removable',
      'MCB Channel Removable',
      'With Dummy Plate Included',
      'Dust Guard Included'
    ],
    hsnCode: '85371000',
    models: [
      { catNo: 'MSSP04', rating: '4 Way', volts: '250V', pkg: '50', type: 'Single Door Premium' },
      { catNo: 'MSSP06', rating: '6 Way', volts: '250V', pkg: '40', type: 'Single Door Premium' },
      { catNo: 'MSSP08', rating: '8 Way', volts: '250V', pkg: '32', type: 'Single Door Premium' },
      { catNo: 'MSSP10', rating: '10 Way', volts: '250V', pkg: '26', type: 'Single Door Premium' },
      { catNo: 'MSSP12', rating: '12 Way', volts: '250V', pkg: '25', type: 'Single Door Premium' },
      { catNo: 'MSSP16', rating: '16 Way', volts: '250V', pkg: '20', type: 'Single Door Premium' }
    ]
  },
  {
    id: 23,
    title: 'Metal MCB Distribution Board (Double Door - SPN) DELUXE',
    category: 'Distribution Boards',
    image: metalMcbDistributionBoardDoubleDoorSpnDeluxeImg,
    description: 'Deluxe double door SPN MCB distribution boards with 22G thick metal body, shock proof coating, solid brass neutral busbar link, dummy plates, and removable topside plates.',
    specs: [
      '22G Thick Metal Body',
      'Shock Proof Coating',
      'Double Door Safety Shield',
      'With Neutral Busbar Link',
      'With Dummy Plate Included',
      'Topside Plate Removable',
      'MCB Channel Removable',
      'Dust Guard Included'
    ],
    hsnCode: '85371000',
    models: [
      { catNo: 'MSDD04', rating: '4 Way', volts: '250V', pkg: '16', type: 'Double Door Deluxe' },
      { catNo: 'MSDD06', rating: '6 Way', volts: '250V', pkg: '16', type: 'Double Door Deluxe' },
      { catNo: 'MSDD08', rating: '8 Way', volts: '250V', pkg: '12', type: 'Double Door Deluxe' },
      { catNo: 'MSDD10', rating: '10 Way', volts: '250V', pkg: '12', type: 'Double Door Deluxe' },
      { catNo: 'MSDD12', rating: '12 Way', volts: '250V', pkg: '11', type: 'Double Door Deluxe' },
      { catNo: 'MSDD16', rating: '16 Way', volts: '250V', pkg: '8', type: 'Double Door Deluxe' }
    ]
  },
  {
    id: 25,
    title: 'Metal MCB Distribution Board (Double Door - SPN) MAGNETIC',
    category: 'Distribution Boards',
    image: metalMcbDistributionBoardDoubleDoorSpnMagneticImg,
    description: 'Magnetic double door SPN distribution boards with quick-snap magnetic door closure, 22G thick metal body, brass neutral busbar link, copper phase link, earthing busbar link, and dummy plate.',
    specs: [
      '22G Thick Metal Body',
      'Quick Snap Magnetic Door Lock',
      'Shock Proof Coating',
      'With Neutral Busbar Link',
      'With Copper Face / Phase Link',
      'Earthing Busbar Link Included',
      'With Dummy Plate & Dust Guard'
    ],
    hsnCode: '85371000',
    models: [
      { catNo: 'MSDM04', rating: '4 Way', volts: '250V', pkg: '16', type: 'Magnetic Double Door' },
      { catNo: 'MSDM06', rating: '6 Way', volts: '250V', pkg: '16', type: 'Magnetic Double Door' },
      { catNo: 'MSDM08', rating: '8 Way', volts: '250V', pkg: '12', type: 'Magnetic Double Door' },
      { catNo: 'MSDM10', rating: '10 Way', volts: '250V', pkg: '12', type: 'Magnetic Double Door' },
      { catNo: 'MSDM12', rating: '12 Way', volts: '250V', pkg: '11', type: 'Magnetic Double Door' },
      { catNo: 'MSDM16', rating: '16 Way', volts: '250V', pkg: '8', type: 'Magnetic Double Door' }
    ]
  },
  {
    id: 27,
    title: 'Metal MCB Distribution Board (Double Door - SPN) PREMIUM',
    category: 'Distribution Boards',
    image: metalMcbDistributionBoardDoubleDoorSpnPremiumImg,
    description: 'Premium double door SPN distribution boards featuring 22G thick metal chassis, solid brass neutral busbar link, pure copper face/phase link, earthing busbar link, extra top cover packing, and dust guard.',
    specs: [
      '22G Thick Metal Body',
      'Shock Proof Coating',
      'With Neutral Busbar Link',
      'With Copper Face / Phase Link',
      'Earthing Busbar Link Included',
      'Top Cover Extra Packed',
      'With Dummy Plate & Dust Guard'
    ],
    hsnCode: '85371000',
    models: [
      { catNo: 'MSDP04', rating: '4 Way', volts: '250V', pkg: '16', type: 'Double Door Premium' },
      { catNo: 'MSDP06', rating: '6 Way', volts: '250V', pkg: '16', type: 'Double Door Premium' },
      { catNo: 'MSDP08', rating: '8 Way', volts: '250V', pkg: '12', type: 'Double Door Premium' },
      { catNo: 'MSDP10', rating: '10 Way', volts: '250V', pkg: '12', type: 'Double Door Premium' },
      { catNo: 'MSDP12', rating: '12 Way', volts: '250V', pkg: '11', type: 'Double Door Premium' },
      { catNo: 'MSDP16', rating: '16 Way', volts: '250V', pkg: '8', type: 'Double Door Premium' },
      { catNo: 'MSDP20', rating: '20 Way', volts: '250V', pkg: '10', type: 'Double Door Premium' }
    ]
  },
  {
    id: 29,
    title: 'Whiteline MCB Distribution Board (Double Door - SPN)',
    category: 'Distribution Boards',
    image: whitelineMcbDistributionBoardDoubleDoorSpnImg,
    description: 'Whiteline series double door SPN distribution boards crafted with 22G metal body, shock proof white finish, tinted smoke acrylic door window, solid brass neutral busbar link, removable MCB channel, and dust guard.',
    specs: [
      '22G Thick Metal Body',
      'Shock Proof Coating',
      'With Neutral Busbar Link',
      'Topside Plate Removable',
      'MCB Channel Removable',
      'Dust Guard Includes',
      'Tinted Smoke Acrylic Door'
    ],
    hsnCode: '85371000',
    models: [
      { catNo: 'WSDB102', rating: '1 / 2 (Small)', poles: '250', pkg: '150', type: 'Whiteline Double Door' },
      { catNo: 'WSDB304', rating: '3 / 4 (Small)', poles: '250', pkg: '100', type: 'Whiteline Double Door' },
      { catNo: 'WSDB204', rating: '2 / 4', poles: '250', pkg: '54', type: 'Whiteline Double Door' },
      { catNo: 'WSDB608', rating: '6 / 8', poles: '250', pkg: '36', type: 'Whiteline Double Door' },
      { catNo: 'WSDB10012', rating: '10 / 12', poles: '250', pkg: '24', type: 'Whiteline Double Door' },
      { catNo: 'WSDB16018', rating: '16 / 18', poles: '250', pkg: '18', type: 'Whiteline Double Door' }
    ]
  },
  {
    id: 30,
    title: 'TPN Deluxe MCB Distribution Board (Single Door)',
    category: 'Distribution Boards',
    image: liveImg12,
    description: 'Standard TPN single door board for three-phase installations, configured with copper face links and heavy neutral bar.',
    specs: ['20G Thick Metal Body', 'Copper Face Links Included', 'Zinc Plated Neutral Bar block', 'Dust Proof Body design'],
    hsnCode: '85371000',
    models: [
      { catNo: 'MTSD04', rating: '4 Way TPN', pkg: '10', type: 'Single Door' },
      { catNo: 'MTSD06', rating: '6 Way TPN', pkg: '8', type: 'Single Door' },
      { catNo: 'MTSD08', rating: '8 Way TPN', pkg: '8', type: 'Single Door' },
      { catNo: 'MTSD10', rating: '10 Way TPN', pkg: '6', type: 'Single Door' },
      { catNo: 'MTSD12', rating: '12 Way TPN', pkg: '4', type: 'Single Door' }
    ]
  },
  {
    id: 31,
    title: 'TPN Deluxe MCB Distribution Board (Double Door)',
    category: 'Distribution Boards',
    image: liveImg13,
    description: 'Double door version of the TPN distribution board, providing complete internal shield plate safety for three phase breakers.',
    specs: ['Double Door safety shield', 'Internal Copper Phase links', 'Durable lockable door latch', 'IP43 Enclosure Class'],
    hsnCode: '85371000',
    models: [
      { catNo: 'MTDD04', rating: '4 Way TPN', pkg: '6', type: 'Double Door' },
      { catNo: 'MTDD06', rating: '6 Way TPN', pkg: '4', type: 'Double Door' },
      { catNo: 'MTDD08', rating: '8 Way TPN', pkg: '4', type: 'Double Door' },
      { catNo: 'MTDD10', rating: '10 Way TPN', pkg: '3', type: 'Double Door' },
      { catNo: 'MTDD12', rating: '12 Way TPN', pkg: '2', type: 'Double Door' }
    ]
  },
  {
    id: 32,
    title: 'TPN Magnetic MCB Distribution Board (Single Door)',
    category: 'Distribution Boards',
    image: liveImg12,
    description: 'Magnetic single door distribution board for three-phase lines, utilizing quick-latch magnetic strip locks.',
    specs: ['Quick-Snap Magnetic Latch latch', 'Ivory powder coat color', 'Removable gland plates cover', 'Spacious neutral links loops'],
    hsnCode: '85371000',
    models: [
      { catNo: 'MTMD04', rating: '4 Way TPN', pkg: '10', type: 'Magnetic Single' },
      { catNo: 'MTMD06', rating: '6 Way TPN', pkg: '8', type: 'Magnetic Single' },
      { catNo: 'MTMD08', rating: '8 Way TPN', pkg: '8', type: 'Magnetic Single' },
      { catNo: 'MTMD10', rating: '10 Way TPN', pkg: '6', type: 'Magnetic Single' },
      { catNo: 'MTMD12', rating: '12 Way TPN', pkg: '4', type: 'Magnetic Single' }
    ]
  },
  {
    id: 33,
    title: 'Metal MCB Distribution Board (Double Door - TPN) MAGNETIC',
    category: 'Distribution Boards',
    image: metalMcbDistributionBoardDoubleDoorTpnMagneticImg,
    description: 'High-performance double door three-phase (TPN) magnetic distribution board featuring quick-snap magnetic door locks, neutral busbar, copper phase link, and dummy plate. Engineered with 20G thick metal body, shock-proof coating, removable topside plate and MCB channel, earthing busbar link, extra packed top cover for safety, and dust guard included.',
    specs: [
      '20G Thick Metal Body',
      'Shock Proof Coating',
      'Topside Plate Removable',
      'MCB Channel Removable',
      'With Neutral Busbar & Copper Face Link',
      'Earthing Busbar Link',
      'For safety Top Cover is Extra Packed',
      'Dust Guard Includes',
      'Magnetic Door Locks'
    ],
    hsnCode: '85371000',
    models: [
      { catNo: 'MTDM04', rating: '4', poles: '16', volts: '440', pkg: '4' },
      { catNo: 'MTDM06', rating: '6', poles: '24', volts: '440', pkg: '4' },
      { catNo: 'MTDM08', rating: '8', poles: '32', volts: '440', pkg: '4' },
      { catNo: 'MTDM12', rating: '12', poles: '48', volts: '440', pkg: '3' }
    ]
  },
  {
    id: 34,
    title: 'Metal MCB Distribution Board (Single Door - TPN) PREMIUM',
    category: 'Distribution Boards',
    image: metalMcbDistributionBoardSingleDoorTpnPremiumImg,
    description: 'Premium heavy-duty single door three-phase (TPN) MCB distribution boards constructed with 20G thick metal chassis, shock-proof powder coating, solid brass neutral busbar link, pure copper face link, removable topside plate, and MCB channel.',
    specs: [
      '20G Thick Metal Body',
      'Shock Proof Coating',
      'Topside Plate Removable',
      'MCB Channel Removable',
      'With Neutral Busbar & Copper Face Link',
      'With Dummy Plate Included'
    ],
    hsnCode: '85371000',
    models: [
      { catNo: 'MTSP04', rating: '4', poles: '16', volts: '440', pkg: '8' },
      { catNo: 'MTSP06', rating: '6', poles: '24', volts: '440', pkg: '8' },
      { catNo: 'MTSP08', rating: '8', poles: '32', volts: '440', pkg: '8' },
      { catNo: 'MTSP12', rating: '12', poles: '48', volts: '440', pkg: '6' }
    ]
  },
  {
    id: 35,
    title: 'Metal MCB Distribution Board (Double Door - TPN) PREMIUM',
    category: 'Distribution Boards',
    image: metalMcbDistributionBoardDoubleDoorTpnPremiumImg,
    description: 'Premium heavy-duty double door three-phase (TPN) MCB distribution boards with neutral busbar, phase link & dummy plate. Built with 20G thick metal body, shock-proof coating, removable topside plate, removable MCB channel, with neutral busbar & copper face link, earthing busbar link, extra packed top cover for safety, and dust guard included.',
    specs: [
      '20G Thick Metal Body',
      'Shock Proof Coating',
      'Topside Plate Removable',
      'MCB Channel Removable',
      'With Neutral Busbar & Copper Face Link',
      'Earthing Busbar Link',
      'For safety Top Cover is Extra Packed',
      'Dust Guard Includes'
    ],
    hsnCode: '85371000',
    models: [
      { catNo: 'MTDP04', rating: '4', poles: '16', volts: '440', pkg: '4' },
      { catNo: 'MTDP06', rating: '6', poles: '24', volts: '440', pkg: '4' },
      { catNo: 'MTDP08', rating: '8', poles: '32', volts: '440', pkg: '4' },
      { catNo: 'MTDP12', rating: '12', poles: '48', volts: '440', pkg: '3' }
    ]
  },
  {
    id: 36,
    title: 'A.C. Box Metal Socket (Only Metal Board)',
    category: 'Distribution Boards',
    image: acBoxMetalSocketOnlyMetalBoardImg,
    description: 'Robust 22G thick sheet metal A.C. box distribution enclosure designed for 1 socket and 1 MCB fitting point. Finished with a specialized shock proof coating for easy and safe electrical installations, customizable as per your requirement.',
    specs: [
      'Available 1 Socket & 1 MCB Fitting Point',
      'Robust Body Made of 22G Thick Metal',
      'Finished With a Specialized Shock Proof Coating',
      'Easy Installation',
      'Customizable As per Your Requirement'
    ],
    hsnCode: '85371000',
    models: [
      { catNo: 'MMAC6101', rating: 'Only Box - SP', pkg: '40', type: 'Only Box' },
      { catNo: 'MMAC6102', rating: 'Only Box - DP', pkg: '40', type: 'Only Box' },
      { catNo: 'MMAC6103', rating: 'With Plug-Socket 20/2-SP', pkg: '54', type: 'With Plug-Socket' },
      { catNo: 'MMAC6104', rating: 'With Plug-Socket 20/2-DP', pkg: '54', type: 'With Plug-Socket' }
    ]
  },
  {
    id: 37,
    title: 'A.C. Box PVC Socket (Only Metal Board)',
    category: 'Distribution Boards',
    image: acBoxPvcSocketOnlyMetalBoardImg,
    description: 'Robust 22G thick sheet metal A.C. box distribution enclosure designed for 1 PVC industrial socket and 1 MCB fitting point. Finished with a specialized shock proof coating for easy and safe electrical installations, customizable as per your requirement.',
    specs: [
      'Available 1 Socket & 1 MCB Fitting Point',
      'Robust Body Made of 22G Thick Metal',
      'Finished With a Specialized Shock Proof Coating',
      'Easy Installation',
      'Customizable As per Your Requirement'
    ],
    hsnCode: '85371000',
    models: [
      { catNo: 'MPAC6301', rating: 'Only Box - DP', pkg: '40', type: 'Only Box' },
      { catNo: 'MPAC6302', rating: 'Only Box - TPN', pkg: '40', type: 'Only Box' },
      { catNo: 'MPAC6303', rating: 'With Plug-Socket 16/3-DP', pkg: '40', type: 'With Plug-Socket' },
      { catNo: 'MPAC6304', rating: 'With Plug-Socket 32/5-TPN', pkg: '40', type: 'With Plug-Socket' }
    ]
  },
  {
    id: 38,
    title: '1 Socket + 1 MCB DP & TPN MCB (Only Metal Board)',
    category: 'Distribution Boards',
    image: oneSocketOneMcbBoardDpTpnImg,
    description: 'Compact heavy-duty 20G sheet metal distribution board for mounting 1 industrial socket and 1 MCB breaker, compatible with DP and TPN MCBs. Finished with a specialized shock proof coating for durable factory power supply, customizable as per your requirement.',
    specs: [
      'Available 1 Socket & 1 MCB Fitting Point',
      '20G Thick Metal Body',
      'Shock Proof Coating',
      'Customizable As per Your Requirement'
    ],
    hsnCode: '85371000',
    models: [
      { catNo: 'MMSM61111', rating: '20/2 Socket + DP MCB', pkg: '30', type: 'DP MCB' },
      { catNo: 'MMSM61112', rating: '20/3 Socket + TPN MCB', pkg: '30', type: 'TPN MCB' },
      { catNo: 'MMSM61113', rating: '30/3 Socket + TPN MCB', pkg: '30', type: 'TPN MCB' }
    ]
  },
  {
    id: 39,
    title: '2 Socket + 1 MCB DP & TPN MCB (Only Metal Board)',
    category: 'Distribution Boards',
    image: twoSocketOneMcbBoardDpTpnImg,
    description: 'Heavy-duty 20G sheet metal distribution board designed for mounting 2 industrial sockets and 1 MCB breaker, compatible with DP and TPN MCBs. Finished with a specialized shock proof coating for safe, high-durability industrial power distribution, customizable as per your requirement.',
    specs: [
      'Available 2 Socket & 1 MCB Fitting Point',
      '20G Thick Metal Body',
      'Shock Proof Coating',
      'Customizable As per Your Requirement'
    ],
    hsnCode: '85371000',
    models: [
      { catNo: 'MMSM61211', rating: '20/2 Socket + DP MCB', pkg: '20', type: 'DP MCB' },
      { catNo: 'MMSM61212', rating: '20/3 Socket + TPN MCB', pkg: '20', type: 'TPN MCB' },
      { catNo: 'MMSM61213', rating: '30/3 Socket + TPN MCB', pkg: '20', type: 'TPN MCB' }
    ]
  },
  {
    id: 61,
    title: '2 Socket + 2 MCB SP & DP & TPN MCB (Only Metal Board)',
    category: 'Distribution Boards',
    image: twoSocketTwoMcbBoardSpDpTpnImg,
    description: 'Heavy-duty 20G sheet metal distribution enclosure designed for mounting 2 industrial sockets and 2 MCB breakers, compatible with SP, DP, and TPN MCB configurations. Finished with a specialized shock proof coating for safe and organized industrial power distribution, customizable as per your requirement.',
    specs: [
      'Available 2 Socket & 2 MCB Fitting Point',
      '20G Thick Metal Body',
      'Shock Proof Coating',
      'Customizable As per Your Requirement'
    ],
    hsnCode: '85371000',
    models: [
      { catNo: 'MMSM61221', rating: '20/2 Socket + SP MCB', pkg: '20', type: 'SP MCB' },
      { catNo: 'MMSM61222', rating: '20/2 Socket + DP MCB', pkg: '20', type: 'DP MCB' },
      { catNo: 'MMSM61223', rating: '20/3 Socket + TPN MCB', pkg: '20', type: 'TPN MCB' },
      { catNo: 'MMSM61224', rating: '30/3 Socket + TPN MCB', pkg: '20', type: 'TPN MCB' },
      { catNo: 'MMSM62221', rating: '1-20/2 # 1-20/3 Socket + 1-DP+1-TPN MCB', pkg: '20', type: 'Combination' },
      { catNo: 'MMSM62222', rating: '1-20/2 # 1-30/3 Socket + 1-DP+1-TPN MCB', pkg: '20', type: 'Combination' },
      { catNo: 'MMSM62223', rating: '1-20/3 # 1-30/3 Socket + 1-TPN+1-TPN MCB', pkg: '20', type: 'Combination' }
    ]
  },
  {
    id: 40,
    title: '3 Socket + 1 MCB DP & TPN MCB (Only Metal Board)',
    category: 'Distribution Boards',
    image: threeSocketOneMcbBoardDpTpnImg,
    description: 'Heavy-duty 20G sheet metal distribution board enclosure engineered for 3 industrial sockets and 1 MCB breaker, compatible with DP and TPN MCB switches. Features a durable shock proof coating for safe, high-load factory electrical installations, customizable as per your requirement.',
    specs: [
      'Available 3 Socket & 1 MCB Fitting Point',
      '20G Thick Metal Body',
      'Shock Proof Coating',
      'Customizable As per Your Requirement'
    ],
    hsnCode: '85371000',
    models: [
      { catNo: 'MMSM61311', rating: '20/2 Socket + DP MCB', pkg: '20', type: 'DP MCB' },
      { catNo: 'MMSM61312', rating: '20/3 Socket + TPN MCB', pkg: '20', type: 'TPN MCB' },
      { catNo: 'MMSM61313', rating: '30/3 Socket + TPN MCB', pkg: '14', type: 'TPN MCB' }
    ]
  },
  {
    id: 62,
    title: '3 Socket + 3 MCB SP & DP & TPN MCB (Only Metal Board)',
    category: 'Distribution Boards',
    image: threeSocketThreeMcbBoardSpDpTpnImg,
    description: 'Robust 20G sheet metal industrial distribution enclosure designed for 3 sockets and 3 independent MCB switches, compatible with SP, DP, and TPN configurations. Finished with high-grade shock proof coating for heavy-duty industrial workshop machinery, customizable as per your requirement.',
    specs: [
      'Available 3 Socket & 3 MCB Fitting Point',
      '20G Thick Metal Body',
      'Shock Proof Coating',
      'Customizable As per Your Requirement'
    ],
    hsnCode: '85371000',
    models: [
      { catNo: 'MMSM61331', rating: '20/2 Socket + SP MCB', pkg: '14', type: 'SP MCB' },
      { catNo: 'MMSM61332', rating: '20/2 Socket + DP MCB', pkg: '14', type: 'DP MCB' },
      { catNo: 'MMSM61333', rating: '20/3 Socket + TPN MCB', pkg: '14', type: 'TPN MCB' },
      { catNo: 'MMSM61334', rating: '30/3 Socket + TPN MCB', pkg: '14', type: 'TPN MCB' },
      { catNo: 'MMSM62331', rating: '20/2+20/3+30/3 Socket + DP+1-TPN MCB', pkg: '14', type: 'Combination' }
    ]
  },
  {
    id: 41,
    title: '4 Socket + 1 MCB TPN MCB (Only Metal Board)',
    category: 'Distribution Boards',
    image: fourSocketOneMcbBoardTpnImg,
    description: 'Heavy-duty 20G sheet metal industrial distribution enclosure designed for 4 industrial sockets and 1 TPN MCB master breaker. Features a specialized shock proof coating for durable, high-reliability industrial power distribution, customizable as per your requirement.',
    specs: [
      'Available 4 Socket & 1 MCB Fitting Point',
      '20G Thick Metal Body',
      'Shock Proof Coating',
      'Customizable As per Your Requirement'
    ],
    hsnCode: '85371000',
    models: [
      { catNo: 'MMSM61411', rating: '20/2 Socket + TPN MCB', pkg: '14', type: 'TPN MCB' },
      { catNo: 'MMSM61412', rating: '20/3 Socket + TPN MCB', pkg: '14', type: 'TPN MCB' },
      { catNo: 'MMSM61413', rating: '30/3 Socket + TPN MCB', pkg: '10', type: 'TPN MCB' }
    ]
  },
  {
    id: 42,
    title: '4 Socket + 2 MCB DP & TPN MCB (Only Metal Board)',
    category: 'Distribution Boards',
    image: fourSocketTwoMcbBoardDpTpnImg,
    description: 'Robust 20G sheet metal distribution enclosure designed for 4 industrial sockets and 2 independent MCB breaker switches, compatible with DP and TPN MCB configurations. Finished with high-durability shock proof coating for heavy-duty industrial machinery, customizable as per your requirement.',
    specs: [
      'Available 4 Socket & 2 MCB Fitting Point',
      '20G Thick Metal Body',
      'Shock Proof Coating',
      'Customizable As per Your Requirement'
    ],
    hsnCode: '85371000',
    models: [
      { catNo: 'MMSM61421', rating: '20/2 Socket + DP MCB', pkg: '10', type: 'DP MCB' },
      { catNo: 'MMSM61422', rating: '20/3 Socket + TPN MCB', pkg: '10', type: 'TPN MCB' },
      { catNo: 'MMSM61423', rating: '30/3 Socket + TPN MCB', pkg: '10', type: 'TPN MCB' },
      { catNo: 'MMSM62421', rating: '2-20/2 # 2-20/3 Socket + 1-DP+1-TPN MCB', pkg: '10', type: 'Combination' },
      { catNo: 'MMSM62422', rating: '2-20/2 # 2-30/3 Socket + 1-DP+1-TPN MCB', pkg: '10', type: 'Combination' },
      { catNo: 'MMSM62423', rating: '2-20/3 # 2-30/3 Socket + 1-TPN+1-TPN MCB', pkg: '10', type: 'Combination' }
    ]
  },
  {
    id: 63,
    title: '4 Socket + 4 MCB SP & DP & TPN MCB (Only Metal Board)',
    category: 'Distribution Boards',
    image: fourSocketFourMcbBoardSpDpTpnImg,
    description: 'Robust 20G sheet metal industrial distribution board engineered for 4 industrial sockets with 4 independent MCB breaker switches, compatible with SP, DP, and TPN MCB units. Finished with a specialized shock proof coating for heavy-duty factory machinery, customizable as per your requirement.',
    specs: [
      'Available 4 Socket & 4 MCB Fitting Point',
      '20G Thick Metal Body',
      'Shock Proof Coating',
      'Customizable As per Your Requirement'
    ],
    hsnCode: '85371000',
    models: [
      { catNo: 'MMSM61441', rating: '20/2 Socket + SP MCB', pkg: '10', type: 'SP MCB' },
      { catNo: 'MMSM61442', rating: '20/2 Socket + DP MCB', pkg: '10', type: 'DP MCB' },
      { catNo: 'MMSM61443', rating: '20/3 Socket + TPN MCB', pkg: '10', type: 'TPN MCB' },
      { catNo: 'MMSM61444', rating: '30/3 Socket + TPN MCB', pkg: '10', type: 'TPN MCB' },
      { catNo: 'MMSM62441', rating: '2-20/2 # 2-20/3 Socket + 2-DP+2-TPN MCB', pkg: '10', type: 'Combination' },
      { catNo: 'MMSM62442', rating: '2-20/2 # 2-30/3 Socket + 2-DP+2-TPN MCB', pkg: '10', type: 'Combination' },
      { catNo: 'MMSM62443', rating: '2-20/3 # 2-30/3 Socket + 2-TPN+2-TPN MCB', pkg: '10', type: 'Combination' }
    ]
  },
  {
    id: 43,
    title: '6 Socket + 1 MCB TPN MCB (Only Metal Board)',
    category: 'Distribution Boards',
    image: sixSocketOneMcbBoardTpnImg,
    description: 'Robust 20G sheet metal industrial distribution board engineered for 6 industrial sockets and 1 TPN MCB master breaker unit. Finished with durable shock proof coating for heavy-duty factory and workshop power supply, customizable as per your requirement.',
    specs: [
      'Available 6 Socket & 1 MCB Fitting Point',
      '20G Thick Metal Body',
      'Shock Proof Coating',
      'Customizable As per Your Requirement'
    ],
    hsnCode: '85371000',
    models: [
      { catNo: 'MMSM61611', rating: '20/2 Socket + TPN MCB', pkg: '10', type: 'TPN MCB' },
      { catNo: 'MMSM61612', rating: '20/3 Socket + TPN MCB', pkg: '10', type: 'TPN MCB' },
      { catNo: 'MMSM61613', rating: '30/3 Socket + TPN MCB', pkg: '10', type: 'TPN MCB' }
    ]
  },
  {
    id: 44,
    title: '8 Socket + 1 MCB TPN MCB (Only Metal Board)',
    category: 'Distribution Boards',
    image: eightSocketOneMcbBoardTpnImg,
    description: 'High-capacity 20G sheet metal industrial distribution board engineered to accommodate 8 industrial sockets and 1 TPN MCB master breaker unit. Finished with specialized shock proof coating for heavy-duty factory machinery installations, customizable as per your requirement.',
    specs: [
      'Available 8 Socket & 1 MCB Fitting Point',
      '20G Thick Metal Body',
      'Shock Proof Coating',
      'Customizable As per Your Requirement'
    ],
    hsnCode: '85371000',
    models: [
      { catNo: 'MMSM61811', rating: '20/2 Socket + TPN MCB', pkg: '10', type: 'TPN MCB' },
      { catNo: 'MMSM61812', rating: '20/3 Socket + TPN MCB', pkg: '10', type: 'TPN MCB' },
      { catNo: 'MMSM61813', rating: '30/3 Socket + TPN MCB', pkg: '10', type: 'TPN MCB' }
    ]
  },
  {
    id: 46,
    title: '6 Socket + 2 MCB TPN MCB (Only Metal Board)',
    category: 'Distribution Boards',
    image: sixSocketTwoMcbBoardTpnImg,
    description: 'Heavy-duty 20G sheet metal distribution enclosure designed for 6 industrial sockets and 2 TPN MCB breaker switches. Features a specialized shock proof coating for large-scale industrial machinery and workshop electrical safety, customizable as per your requirement.',
    specs: [
      'Available 6 Socket & 2 MCB Fitting Point',
      '20G Thick Metal Body',
      'Shock Proof Coating',
      'Customizable As per Your Requirement'
    ],
    hsnCode: '85371000',
    models: [
      { catNo: 'MMSM61621', rating: '20/2 Socket + TPN MCB', pkg: '10', type: 'TPN MCB' },
      { catNo: 'MMSM61622', rating: '20/3 Socket + TPN MCB', pkg: '10', type: 'TPN MCB' },
      { catNo: 'MMSM61623', rating: '30/3 Socket + TPN MCB', pkg: '10', type: 'TPN MCB' },
      { catNo: 'MMSM62621', rating: '3-20/2 # 3-20/3 Socket + 1-TPN+1-TPN MCB', pkg: '10', type: 'Combination' },
      { catNo: 'MMSM62622', rating: '3-20/2 # 3-30/3 Socket + 1-TPN+1-TPN MCB', pkg: '10', type: 'Combination' },
      { catNo: 'MMSM62623', rating: '3-20/3 # 3-30/3 Socket + 1-TPN+1-TPN MCB', pkg: '10', type: 'Combination' }
    ]
  },
  {
    id: 47,
    title: '8 Socket + 2 MCB TPN MCB (Only Metal Board)',
    category: 'Distribution Boards',
    image: eightSocketTwoMcbBoardTpnImg,
    description: 'High-capacity 20G sheet metal industrial distribution enclosure designed for 8 industrial sockets and 2 TPN MCB breaker switches placed diagonally. Finished with a specialized shock proof coating for large industrial plant machinery, customizable as per your requirement.',
    specs: [
      'Available 8 Socket & 2 MCB Fitting Point',
      '20G Thick Metal Body',
      'Shock Proof Coating',
      'Customizable As per Your Requirement'
    ],
    hsnCode: '85371000',
    models: [
      { catNo: 'MMSM61821', rating: '20/2 Socket + TPN MCB', pkg: '10', type: 'TPN MCB' },
      { catNo: 'MMSM61822', rating: '20/3 Socket + TPN MCB', pkg: '10', type: 'TPN MCB' },
      { catNo: 'MMSM61823', rating: '30/3 Socket + TPN MCB', pkg: '10', type: 'TPN MCB' },
      { catNo: 'MMSM62821', rating: '4-20/2 # 4-20/3 Socket + 1-TPN+1-TPN MCB', pkg: '10', type: 'Combination' },
      { catNo: 'MMSM62822', rating: '4-20/2 # 4-30/3 Socket + 1-TPN+1-TPN MCB', pkg: '10', type: 'Combination' },
      { catNo: 'MMSM62823', rating: '4-20/3 # 4-30/3 Socket + 1-TPN+1-TPN MCB', pkg: '10', type: 'Combination' }
    ]
  },

  {
    id: 52,
    title: 'Metal Push Button Board (22mm-HOLE)',
    category: 'Junctions & Push Buttons',
    image: liveImg16,
    description: 'Sheet metal push-button station enclosures pre-punched with standard 22mm holes, finished with shock-proof coating.',
    specs: ['Pre-punched standard 22mm holes', '22G Sturdy Sheet Metal Body', 'Scratch resistant paint finish', 'Flush industrial installation style'],
    hsnCode: '85389000',
    models: [
      { catNo: 'MPBB5401', rating: '1 Way Enclosure', pkg: '50', type: 'Push Button Board' },
      { catNo: 'MPBB5402', rating: '2 Way Enclosure', pkg: '50', type: 'Push Button Board' },
      { catNo: 'MPBB5403', rating: '3 Way Enclosure', pkg: '50', type: 'Push Button Board' },
      { catNo: 'MPBB5404', rating: '4 Way Enclosure', pkg: '50', type: 'Push Button Board' },
      { catNo: 'MPBB5406', rating: '6 Way Enclosure', pkg: '50', type: 'Push Button Board' },
      { catNo: 'MPBB5408', rating: '8 Way Enclosure', pkg: '50', type: 'Push Button Board' }
    ]
  },
  {
    id: 53,
    title: '1 Socket + 1 MCB (Only Metal Board)',
    category: 'Distribution Boards',
    image: oneSocketOneMcbBoardPvcSocketImg,
    description: 'Heavy-duty 20G sheet metal industrial distribution enclosure designed to mount 1 industrial PVC socket and 1 MCB breaker (DP or TPN). Finished with a specialized shock proof coating for durable industrial workshop machinery and power distribution, customizable as per your requirement.',
    specs: [
      'Available 1 Socket & 1 MCB Fitting Point',
      '20G Thick Metal Body',
      'Shock Proof Coating',
      'Customizable As per Your Requirement'
    ],
    hsnCode: '85371000',
    models: [
      { catNo: 'MPSM63111', rating: '16/3 PVC Socket + DP MCB', pkg: '30', type: 'DP MCB' },
      { catNo: 'MPSM63112', rating: '32/5 PVC Socket + TPN MCB', pkg: '30', type: 'TPN MCB' },
      { catNo: 'MPSM63113', rating: '63/5 PVC Socket + TPN MCB', pkg: '19', type: 'TPN MCB' }
    ]
  },
  {
    id: 64,
    title: '2 Socket + 1 MCB (Only Metal Board)',
    category: 'PVC Socket + MCB Board',
    image: twoSocketOneMcbBoardPvcSocketImg,
    description: 'Heavy-duty 20G sheet metal industrial distribution enclosure designed to mount 2 industrial PVC sockets and 1 MCB breaker (DP or TPN). Finished with a specialized shock proof coating for durable industrial workshop machinery and power distribution, customizable as per your requirement.',
    specs: [
      'Available 2 Socket & 1 MCB Fitting Point',
      '20G Thick Metal Body',
      'Shock Proof Coating',
      'Customizable As per Your Requirement'
    ],
    hsnCode: '85371000',
    models: [
      { catNo: 'MPSM63211', rating: '16/3 PVC Socket + DP MCB', pkg: '20', type: 'DP MCB' },
      { catNo: 'MPSM63212', rating: '32/5 PVC Socket + TPN MCB', pkg: '20', type: 'TPN MCB' }
    ]
  },
  {
    id: 65,
    title: '2 Socket + 2 MCB (Only Metal Board)',
    category: 'PVC Socket + MCB Board',
    image: twoSocketTwoMcbBoardPvcSocketImg,
    description: 'Heavy-duty 20G sheet metal industrial distribution enclosure designed to mount 2 industrial PVC sockets and 2 MCB breakers (SP, DP, or TPN). Finished with a specialized shock proof coating for durable industrial workshop machinery and power distribution, customizable as per your requirement.',
    specs: [
      'Available 2 Socket & 2 MCB Fitting Point',
      '20G Thick Metal Body',
      'Shock Proof Coating',
      'Customizable As per Your Requirement'
    ],
    hsnCode: '85371000',
    models: [
      { catNo: 'MPSM63221', rating: '16/3 PVC Socket + SP MCB', pkg: '20', type: 'SP MCB' },
      { catNo: 'MPSM63222', rating: '16/3 PVC Socket + DP MCB', pkg: '20', type: 'DP MCB' },
      { catNo: 'MPSM63223', rating: '32/5 PVC Socket + TPN MCB', pkg: '20', type: 'TPN MCB' }
    ]
  },
  {
    id: 66,
    title: '3 Socket + 1 MCB (Only Metal Board)',
    category: 'PVC Socket + MCB Board',
    image: threeSocketOneMcbBoardPvcSocketImg,
    description: 'Heavy-duty 20G sheet metal industrial distribution enclosure designed to mount 3 industrial PVC sockets and 1 MCB breaker (DP or TPN). Finished with a specialized shock proof coating for durable industrial workshop machinery and power distribution, customizable as per your requirement.',
    specs: [
      'Available 3 Socket & 1 MCB Fitting Point',
      '20G Thick Metal Body',
      'Shock Proof Coating',
      'Customizable As per Your Requirement'
    ],
    hsnCode: '85371000',
    models: [
      { catNo: 'MPSM63311', rating: '16/3 PVC Socket + DP MCB', pkg: '20', type: 'DP MCB' },
      { catNo: 'MPSM63312', rating: '32/5 PVC Socket + TPN MCB', pkg: '20', type: 'TPN MCB' }
    ]
  },
  {
    id: 67,
    title: '3 Socket + 3 MCB (Only Metal Board)',
    category: 'PVC Socket + MCB Board',
    image: threeSocketThreeMcbBoardPvcSocketImg,
    description: 'Heavy-duty 20G sheet metal industrial distribution enclosure designed to mount 3 industrial PVC sockets and 3 MCB breakers (SP, DP, or TPN). Finished with a specialized shock proof coating for durable industrial workshop machinery and power distribution, customizable as per your requirement.',
    specs: [
      'Available 3 Socket & 3 MCB Fitting Point',
      '20G Thick Metal Body',
      'Shock Proof Coating',
      'Customizable As per Your Requirement'
    ],
    hsnCode: '85371000',
    models: [
      { catNo: 'MPSM63331', rating: '16/3 PVC Socket + SP MCB', pkg: '14', type: 'SP MCB' },
      { catNo: 'MPSM63332', rating: '16/3 PVC Socket + DP MCB', pkg: '14', type: 'DP MCB' },
      { catNo: 'MPSM63333', rating: '32/5 PVC Socket + TPN MCB', pkg: '14', type: 'TPN MCB' }
    ]
  },
  {
    id: 54,
    title: 'PVC Socket + MCB Board (IP67 Waterproof)',
    category: 'Junctions & Push Buttons',
    image: liveImg14,
    description: 'IP67 fully waterproof distribution boards with ABS plastic casing and carrying handles, built to withstand outdoor industrial zones.',
    specs: ['IP67 Outdoor Waterproof Rating', 'High Impact Tough ABS body', 'Equipped with carrying handles', 'Resistant up to 80 degrees'],
    hsnCode: '85371000',
    models: [
      { catNo: 'PPSMIP6711', rating: '1 Socket + 4 SP MCB', pkg: '36', type: 'Waterproof Board' },
      { catNo: 'PPSMIP6721H', rating: '3 Socket + 4 SP MCB (H Type)', pkg: '20', type: 'Waterproof Board' },
      { catNo: 'PPSMIP6721', rating: '2 Socket + 8 SP MCB', pkg: '18', type: 'Waterproof Board' },
      { catNo: 'PPSMIP6741', rating: '4 Socket + 8 SP MCB', pkg: '9', type: 'Waterproof Board' },
      { catNo: 'PPSMIP6761', rating: '6 Socket + 12 SP MCB', pkg: '8', type: 'Waterproof Board' }
    ]
  },
  {
    id: 55,
    title: 'PVC Socket + SP MCB Handle Type Board',
    category: 'Junctions & Push Buttons',
    image: liveImg15,
    description: 'Metal board distribution box with convenient carrying handle, designed for single-phase PVC sockets and SP MCBs.',
    specs: ['20G Thick Metal Enclosure Enclosure', 'Carrying Handle Type layout', 'Shock Proof Coating Coating', 'Fits 4 to 8 PVC Sockets'],
    hsnCode: '85371000',
    models: [
      { catNo: 'MPSMH65408', rating: '4 Sockets + 8 SP MCBs', pkg: '14', type: 'Handle Board' },
      { catNo: 'MPSMH65610', rating: '6 Sockets + 10 SP MCBs', pkg: '10', type: 'Handle Board' },
      { catNo: 'MPSMH65812', rating: '8 Sockets + 12 SP MCBs', pkg: '10', type: 'Handle Board' }
    ]
  },
  {
    id: 56,
    title: 'PVC Socket + TPN MCB Handle Type Board',
    category: 'Junctions & Push Buttons',
    image: liveImg15,
    description: 'Heavy-duty carrying handle board configured for three-phase PVC industrial sockets and TPN MCB breakers.',
    specs: ['20G Solid Steel construction', 'Carrying Handle Type layout', 'Shock Proof Coating Coating', 'Fits 4 to 8 PVC Sockets'],
    hsnCode: '85371000',
    models: [
      { catNo: 'MPSMH65402', rating: '4 Sockets + TPN MCB', pkg: '14', type: 'Handle TPN Board' },
      { catNo: 'MPSMH65603', rating: '6 Sockets + TPN MCB', pkg: '10', type: 'Handle TPN Board' },
      { catNo: 'MPSMH65804', rating: '8 Sockets + TPN MCB', pkg: '10', type: 'Handle TPN Board' }
    ]
  },
  {
    id: 57,
    title: 'Metal Junction Board',
    category: 'Junctions & Push Buttons',
    image: metalJunctionBoardImg,
    description: 'Durable heavy-duty 22G sheet metal junction board enclosure with shock-proof coating and top conduit knockouts. Designed for industrial and commercial wire branching, fully customizable as per your requirement.',
    specs: [
      '22G Metal Body',
      'Shock Proof Coating',
      'Customizable as Per Your Requirement'
    ],
    hsnCode: '85371000',
    models: [
      { catNo: 'MJB425', way: '4 x 4', size: '2.5"', pkg: '108' },
      { catNo: 'MJB625', way: '6 x 6', size: '2.5"', pkg: '48' },
      { catNo: 'MJB825', way: '8 x 8', size: '2.5"', pkg: '40' },
      { catNo: 'MJB1025', way: '10 x 10', size: '2.5"', pkg: '14' },
      { catNo: 'MJB1225', way: '12 x 12', size: '2.5"', pkg: '14' },
      { catNo: 'MJB840', way: '8 x 8', size: '4"', pkg: '40' },
      { catNo: 'MJB1040', way: '10 x 10', size: '4"', pkg: '14' },
      { catNo: 'MJB1240', way: '12 x 12', size: '4"', pkg: '14' }
    ]
  }
];

// Dynamically map categories for specific product IDs to align with 13 detailed subcategories
productsData.forEach(p => {
  if (p.id >= 1 && p.id <= 6) p.category = 'Switch Gear';
  else if (p.id === 7) p.category = 'Bus Bar Chamber';
  else if ((p.id >= 8 && p.id <= 10) || p.id === 58) p.category = 'Porcelain Kit Kat Fuse';
  else if (p.id >= 11 && p.id <= 18) p.category = 'Industrial Plug & Socket';
  else if (p.id === 19) p.category = 'Switch Gear';
  else if (p.id === 20 || p.id === 60) p.category = 'Industrial Socket Board';
  else if ((p.id >= 21 && p.id <= 29) || p.id === 59) p.category = 'SPN Metal MCB Distribution Board';
  else if (p.id >= 30 && p.id <= 35) p.category = 'TPN Metal MCB Distribution Board';
  else if (p.id >= 36 && p.id <= 37) p.category = 'AC Box Metal Enclosure';
  else if ((p.id >= 38 && p.id <= 51) || p.id === 61 || p.id === 62 || p.id === 63) p.category = 'Metal Socket + MCB Board';
  else if (p.id === 52) p.category = 'Metal Push Button Board';
  else if ((p.id >= 53 && p.id <= 56 && p.id !== 54) || p.id === 64 || p.id === 65 || p.id === 66 || p.id === 67) p.category = 'PVC Socket + MCB Board';
  else if (p.id === 54) p.category = 'IP67 PVC Socket + MCB Board';
  else if (p.id === 57) p.category = 'Junction Board';
});

interface ProductShowcaseProps {
  showHeader?: boolean;
  onProductClick?: (id: number) => void;
  onlyShowCategories?: boolean;
  activeCategory?: string;
  setActiveCategory?: (category: string) => void;
  onCategoryClick?: (category: string) => void;
  selectedProductId?: number | null;
  setSelectedProductId?: (id: number | null) => void;
  onContactClick?: () => void;
}

const ProductShowcase = ({
  showHeader = true,
  onProductClick,
  onlyShowCategories = false,
  activeCategory: controlledCategory,
  setActiveCategory: controlledSetActiveCategory,
  onCategoryClick,
  selectedProductId,
  setSelectedProductId,
  onContactClick
}: ProductShowcaseProps) => {
  const [internalCategory, setInternalCategory] = useState('Switch Gear');
  const activeCategory = controlledCategory !== undefined ? controlledCategory : internalCategory;
  const setActiveCategory = (cat: string) => {
    if (controlledSetActiveCategory) {
      controlledSetActiveCategory(cat);
    } else {
      setInternalCategory(cat);
    }
  };

  const [localSelectedProduct, setLocalSelectedProduct] = useState<Product | null>(null);
  const selectedProduct = selectedProductId !== undefined
    ? productsData.find(p => p.id === selectedProductId) || null
    : localSelectedProduct;

  const setSelectedProduct = (prod: Product | null) => {
    if (setSelectedProductId) {
      setSelectedProductId(prod ? prod.id : null);
    } else {
      setLocalSelectedProduct(prod);
    }
  };
  const [modalTab, setModalTab] = useState<'overview' | 'models'>('overview');
  const [searchQuery, setSearchQuery] = useState('');
  const [isCategoryAccordionOpen, setIsCategoryAccordionOpen] = useState(false);

  // Quotation Form states
  const [formModel, setFormModel] = useState('General Inquiry');
  const [formName, setFormName] = useState('');
  const [formCompany, setFormCompany] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formQty, setFormQty] = useState('1');
  const [formMessage, setFormMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

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
        (m.rating && m.rating.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (m.way && m.way.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (m.size && m.size.toLowerCase().includes(searchQuery.toLowerCase()))
      ));
    return matchesCategory && matchesSearch;
  });

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setFormModel('General Inquiry');
    setFormName('');
    setFormCompany('');
    setFormEmail('');
    setFormPhone('');
    setFormQty('1');
    setFormMessage('');
    setIsSubmitted(false);
  };

  const handleGoToContact = () => {
    handleCloseModal();
    if (onContactClick) {
      onContactClick();
    } else {
      window.location.href = '/contact';
    }
  };

  const handleCardClick = (productId: number) => {
    const product = productsData.find(p => p.id === productId);
    if (product) {
      if (onProductClick) {
        onProductClick(productId);
      } else {
        setSelectedProduct(product);
        setModalTab('overview');
      }
    }
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

        {/* Helper function to get product counts per category */}
        {(() => {
          const getProductCount = (catName: string) => {
            return productsData.filter(p => p.category === catName).length;
          };
          return (
            <>
              {/* Category Selection Grid / Cards */}
              {onlyShowCategories ? (
                /* Category Cards in Product Card style for the Homepage */
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {categoryMeta.map((cat) => {
                    const count = getProductCount(cat.name);
                    return (
                      <div
                        key={cat.name}
                        onClick={() => {
                          if (onCategoryClick) {
                            onCategoryClick(cat.name);
                          }
                        }}
                        className="bg-white rounded-lg border border-slate-100 shadow-sm overflow-hidden flex flex-col group hover:shadow-xl hover:border-slate-200 transition-all duration-300 cursor-pointer"
                      >
                        {/* Representative Category Image Wrapper */}
                        <div className="relative aspect-[4/3] bg-white flex items-center justify-center p-6 sm:p-8 overflow-hidden border-b border-slate-100">
                          <img
                            src={cat.image}
                            alt={cat.name}
                            className="max-h-full max-w-full object-contain transform transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>

                        {/* Description Block */}
                        <div className="p-6 flex flex-col flex-grow text-left">
                          <div className="flex justify-between items-start gap-2 mb-2">
                            <h4 className="text-base sm:text-lg font-semibold text-[#009DE1] font-sans tracking-tight mb-2 group-hover:text-brand-blue transition-colors duration-300">
                              {cat.name}
                            </h4>
                            <span className="shrink-0 text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200 uppercase tracking-wide">
                              {count} {count === 1 ? 'Product' : 'Products'}
                            </span>
                          </div>

                          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2">
                            {cat.description}
                          </p>

                          {/* Bullet Specifications */}
                          <div className="border-t border-slate-100 pt-4 mb-0 space-y-2">
                            {cat.specs?.map((spec, i) => (
                              <div key={i} className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#00B7AC]"></span>
                                <span className="text-[10px] sm:text-xs font-medium text-slate-600">{spec}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <>
                  {/* Tablet + Mobile Category Accordion Selector (< lg screens) */}
                  <div className="block lg:hidden w-full mb-6">
                    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition-all duration-300">
                      <button
                        type="button"
                        onClick={() => setIsCategoryAccordionOpen(!isCategoryAccordionOpen)}
                        className="w-full px-5 py-4 flex items-center justify-between text-left bg-white hover:bg-slate-50/80 active:bg-slate-100 transition-colors cursor-pointer outline-none select-none"
                        aria-expanded={isCategoryAccordionOpen}
                      >
                        <div className="flex flex-col text-left">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-0.5">
                            Category
                          </span>
                          <span className="text-sm sm:text-base font-bold text-slate-800 tracking-tight">
                            {activeCategory}
                          </span>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 transition-colors shrink-0">
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-300 ${isCategoryAccordionOpen ? 'transform rotate-180 text-[#009DE1]' : 'text-slate-500'
                              }`}
                          />
                        </div>
                      </button>

                      {/* Expandable Accordion Body */}
                      <div
                        className={`transition-all duration-300 ease-in-out overflow-hidden ${isCategoryAccordionOpen ? 'max-h-[1200px] opacity-100 border-t border-slate-100' : 'max-h-0 opacity-0'
                          }`}
                      >
                        <div className="p-3 bg-slate-50/70 flex flex-col gap-1.5">
                          {categories.map((category) => {
                            const isSelected = activeCategory === category;
                            return (
                              <button
                                key={category}
                                type="button"
                                onClick={() => {
                                  setActiveCategory(category);
                                  setSearchQuery('');
                                  setIsCategoryAccordionOpen(false);
                                }}
                                className={`w-full px-4 py-3 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wide text-left transition-all duration-200 flex items-center justify-between cursor-pointer ${isSelected
                                    ? 'bg-[#009DE1] text-white shadow-md shadow-[#009DE1]/20'
                                    : 'bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/80'
                                  }`}
                              >
                                <span>{category}</span>
                                {isSelected && (
                                  <span className="w-2 h-2 rounded-full bg-white shrink-0 ml-2"></span>
                                )}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Desktop Category Selection Tabs (original buttons/chips layout for >= lg screens) */}
                  <div className="hidden lg:flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => {
                          setActiveCategory(category);
                          setSearchQuery(''); // clear search when switching categories
                        }}
                        className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-wide uppercase transition-all duration-300 cursor-pointer ${activeCategory === category
                            ? 'bg-[#009DE1] text-white shadow-md shadow-[#009DE1]/20 -translate-y-0.5'
                            : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200'
                          }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </>
              )}

              {!onlyShowCategories && (
                <>
                  {/* Search and Stats bar */}
                  <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4 mb-8 mt-10 pb-4 border-b border-slate-200">
                    <div className="text-left font-sans">
                      <p className="text-xs sm:text-sm text-slate-500 flex items-center flex-wrap gap-1.5">
                        <span>Category:</span>
                        <strong className="text-slate-800 font-bold">{activeCategory}</strong>
                        <button
                          onClick={() => setActiveCategory('All Products')}
                          className="text-[11px] text-[#009DE1] hover:underline font-bold ml-1.5 cursor-pointer uppercase tracking-wider"
                        >
                          (Back to Categories)
                        </button>
                      </p>
                      <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                        Found {filteredProducts.length} {filteredProducts.length === 1 ? 'item' : 'items'} matching current filters
                      </p>
                    </div>

                    <div className="relative min-w-[280px] sm:min-w-[320px]">
                      <input
                        type="text"
                        placeholder={`Search within ${activeCategory}...`}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-4 pr-10 py-2 border border-slate-200 rounded-lg text-slate-800 text-xs sm:text-sm focus:outline-none focus:border-brand-blue shadow-sm bg-white"
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
                        onClick={() => handleCardClick(product.id)}
                        className="bg-white rounded-lg border border-slate-100 shadow-sm overflow-hidden flex flex-col group hover:shadow-xl hover:border-slate-200 transition-all duration-300 cursor-pointer"
                      >
                        {/* Image Showcase Wrapper */}
                        <div className="relative aspect-[4/3] bg-white flex items-center justify-center p-6 sm:p-8 overflow-hidden border-b border-slate-100">
                          <img
                            src={product.image}
                            alt={product.title}
                            className="max-h-full max-w-full object-contain transform transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>

                        {/* Text Description Box */}
                        <div className="p-6 flex flex-col flex-grow text-left">
                          <div className="flex justify-between items-start gap-2 mb-2">
                            <h4 className="text-base sm:text-lg font-semibold text-[#009DE1] font-sans tracking-tight mb-2 group-hover:text-brand-blue transition-colors duration-300 hover:underline">
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
                          <div className="border-t border-slate-100 pt-4 mb-0 space-y-2">
                            {product.specs.slice(0, 2).map((spec, i) => (
                              <div key={i} className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#00B7AC]"></span>
                                <span className="text-[10px] sm:text-xs font-medium text-slate-600">{spec}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                    {filteredProducts.length === 0 && (
                      <div className="col-span-full text-center py-12 text-slate-500">
                        No products found matching your search.
                      </div>
                    )}
                  </div>
                </>
              )}
            </>
          );
        })()}
      </div>

      {/* Inquiry Form Modal Window Popup */}
      {!onlyShowCategories && selectedProduct && (
        <div className="fixed inset-0 z-50 overflow-y-auto overflow-x-hidden flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300">
          <div className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-y-auto md:overflow-hidden flex flex-col md:flex-row border border-slate-100 animate-in fade-in zoom-in-95 duration-200 max-h-[90vh]">

            {/* Modal Close Anchor */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 z-30 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors duration-300 cursor-pointer border-none"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Column 1 (Left): Details Showcase */}
            <div className="w-full md:w-[48%] bg-slate-50 p-6 sm:p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-100 text-left overflow-y-auto max-h-[90vh] md:max-h-[none]">
              <div>
                <span className="text-[10px] font-bold text-slate-500 bg-slate-200 px-3 py-1 rounded-full uppercase tracking-widest inline-block">
                  {selectedProduct.category}
                </span>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mt-4 mb-2 font-sans">
                  {selectedProduct.title}
                </h3>
                <span className="inline-block text-[10px] font-bold text-slate-500 bg-white border border-slate-200 px-2 py-0.5 rounded mb-4 uppercase tracking-wider">
                  HSN CODE: {selectedProduct.hsnCode}
                </span>

                {/* Tab select bar */}
                <div className="flex border-b border-slate-200 mb-4 mt-1">
                  <button
                    onClick={() => setModalTab('overview')}
                    className={`pb-2.5 px-3 text-xs font-bold uppercase tracking-wider border-b-2 transition-all cursor-pointer ${modalTab === 'overview'
                        ? 'border-brand-blue text-brand-blue'
                        : 'border-transparent text-slate-400 hover:text-slate-600'
                      }`}
                  >
                    Overview
                  </button>
                  {selectedProduct.models && selectedProduct.models.length > 0 && (
                    <button
                      onClick={() => setModalTab('models')}
                      className={`pb-2.5 px-3 text-xs font-bold uppercase tracking-wider border-b-2 transition-all cursor-pointer ${modalTab === 'models'
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
                  <div className="max-h-[220px] overflow-y-auto border border-slate-100 rounded-xl bg-white shadow-inner">
                    <table className="w-full text-left text-[11px] border-collapse">
                      <thead>
                        <tr className="bg-slate-50 text-slate-600 font-bold border-b border-slate-100">
                          <th className="py-2.5 px-3">
                            {selectedProduct.models.some(m => m.type || m.rating || m.way || m.size) ? 'Cat. No.' : 'AMPS.'}
                          </th>
                          {selectedProduct.models.some(m => m.way) && <th className="py-2.5 px-3">Way</th>}
                          {selectedProduct.models.some(m => m.size && !m.way) && <th className="py-2.5 px-3">Size</th>}
                          {selectedProduct.models.some(m => m.type || m.rating) && (
                            <th className="py-2.5 px-3">
                              {selectedProduct.models.some(m => m.volts && m.poles) ? 'Amps.' : 'Rating'}
                            </th>
                          )}
                          {selectedProduct.models.some(m => m.size && m.way) && <th className="py-2.5 px-3">Size</th>}
                          {selectedProduct.models.some(m => m.poles) && <th className="py-2.5 px-3">Poles</th>}
                          {selectedProduct.models.some(m => m.volts) && <th className="py-2.5 px-3">Volts</th>}
                          {selectedProduct.models.some(m => m.pkg) && <th className="py-2.5 px-3">Pkg.</th>}
                        </tr>
                      </thead>
                      <tbody>
                        {selectedProduct.models.map(m => (
                          <tr key={m.catNo} className="hover:bg-slate-50 transition-colors border-b border-slate-50 text-slate-700 font-medium">
                            <td className={`py-2.5 px-3 ${m.type || m.rating || m.way || m.size ? 'font-bold text-brand-blue' : 'text-slate-600 font-medium'}`}>{m.catNo}</td>
                            {selectedProduct.models.some(item => item.way) && (
                              <td className="py-2.5 px-3 font-semibold text-slate-800">{m.way || '-'}</td>
                            )}
                            {selectedProduct.models.some(item => item.size && !item.way) && (
                              <td className="py-2.5 px-3 font-semibold text-slate-800">{m.size || '-'}</td>
                            )}
                            {selectedProduct.models.some(item => item.type || item.rating) && (
                              <td className="py-2.5 px-3">{m.rating || m.type || '-'}</td>
                            )}
                            {selectedProduct.models.some(item => item.size && item.way) && (
                              <td className="py-2.5 px-3">{m.size || '-'}</td>
                            )}
                            {selectedProduct.models.some(item => item.poles) && <td className="py-2.5 px-3">{m.poles || '-'}</td>}
                            {selectedProduct.models.some(item => item.volts) && <td className="py-2.5 px-3">{m.volts || '-'}</td>}
                            {selectedProduct.models.some(item => item.pkg) && <td className="py-2.5 px-3">{m.pkg || '-'}</td>}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>

              {/* Mobile-Only Action Button: Redirect to Contact Us Page */}
              <div className="block md:hidden mt-6 pt-4 border-t border-slate-200">
                <button
                  type="button"
                  onClick={handleGoToContact}
                  className="w-full py-3.5 px-5 bg-[#009DE1] hover:bg-[#008bc8] active:bg-[#007cb3] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-[#009DE1]/20 flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer border-none"
                >
                  <span>Contact Us for Inquiry</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Column 2 (Right): Quotation Inquiry Form (Hidden on mobile, visible on desktop) */}
            <div className="hidden md:flex md:w-[52%] p-8 text-left bg-white flex-col justify-center overflow-y-auto max-h-[90vh] md:max-h-[none]">
              <h3 className="text-xl font-bold text-slate-800 tracking-tight mb-6">
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
                        className="w-full px-3 py-2 border border-slate-200 bg-slate-50 rounded-lg text-slate-700 text-xs sm:text-sm font-semibold cursor-not-allowed truncate"
                      />
                    </div>

                    {/* pre-filled model selection dropdown */}
                    <div>
                      <label className="block text-[10px] sm:text-xs font-bold text-slate-650 uppercase mb-1">
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
                            {m.catNo} {m.way ? `- ${m.way} (${m.size})` : m.size ? `- ${m.size} (${m.rating})` : m.rating ? `- ${m.rating.includes('Amps') || m.rating.includes('Way') || m.rating.includes('A') || m.rating.includes('Box') || m.rating.includes('Plug') ? m.rating : `${m.rating} Amps`}` : ''} {m.poles ? `(${m.poles} Poles)` : ''} {m.type && !m.rating?.includes(m.type) ? `- ${m.type}` : ''}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] sm:text-xs font-bold text-slate-655 uppercase mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-brand-blue bg-white font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] sm:text-xs font-bold text-slate-655 uppercase mb-1">
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={formCompany}
                        onChange={(e) => setFormCompany(e.target.value)}
                        placeholder="Power Grid Corp"
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-brand-blue bg-white font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] sm:text-xs font-bold text-slate-655 uppercase mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formEmail}
                        onChange={(e) => setFormEmail(e.target.value)}
                        placeholder="john@example.com"
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-brand-blue bg-white font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] sm:text-xs font-bold text-slate-655 uppercase mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formPhone}
                        onChange={(e) => setFormPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-brand-blue bg-white font-medium"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] sm:text-xs font-bold text-slate-655 uppercase mb-1">
                      Estimated Order Quantity (Units) *
                    </label>
                    <input
                      type="number"
                      required
                      min="1"
                      value={formQty}
                      onChange={(e) => setFormQty(e.target.value)}
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 text-xs sm:text-sm focus:outline-none focus:border-brand-blue bg-white font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] sm:text-xs font-bold text-slate-655 uppercase mb-1">
                      Requirements / Message
                    </label>
                    <textarea
                      rows={3}
                      value={formMessage}
                      onChange={(e) => setFormMessage(e.target.value)}
                      placeholder="Please specify customization details or certifications required..."
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-brand-blue resize-none bg-white font-medium"
                    />
                  </div>

                  {/* Action submit button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-[#009DE1] hover:bg-[#009DE1]/95 disabled:bg-slate-300 text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-lg shadow-brand-blue/10 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer border-none"
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
                    className="px-6 py-2.5 border border-slate-200 hover:border-slate-300 text-slate-600 rounded-lg text-xs font-bold uppercase tracking-wider hover:-translate-y-0.5 transition-all duration-300 cursor-pointer bg-transparent"
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
