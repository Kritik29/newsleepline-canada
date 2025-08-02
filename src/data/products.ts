// Import all product images

//import beds
import ngsw2 from "@/assets/products/beds/ngsw2big.avif";
import ngsw5 from "@/assets/products/beds/ngsw5big.avif";
import ngsw6 from "@/assets/products/beds/ngsw6big.avif";
import ngsw1 from "@/assets/products/beds/ngsw1.avif";
import ngsw from "@/assets/products/beds/ngsw.avif";
import elliot from "@/assets/products/beds/elliot.avif";
import crystalBlack from "@/assets/products/beds/crystal black.avif";
import crystalWhite from "@/assets/products/beds/crystal white.avif";
import tulipBlack from "@/assets/products/beds/tulip black.avif";
import coco1321 from "@/assets/products/beds/1321coco.avif";
import tiffany1311 from "@/assets/products/beds/1-1311 tiffany.avif";
import jasmine1291 from "@/assets/products/beds/2-1291 jasmine.avif";
import maddisonblack1221 from "@/assets/products/beds/3-1221 maddison black.avif";
import linda1271 from "@/assets/products/beds/4-1271 linda.avif";
import shiney_cf from "@/assets/products/beds/5-shiney_cf.avif";
import adriana_cf from "@/assets/products/beds/6-adriana_cf.avif";
import alana_blue_cf from "@/assets/products/beds/7-alana_blue_cf.avif";
import alana_silver_cf from "@/assets/products/beds/8-alana_silver_cf.avif";
import aspen_cf from "@/assets/products/beds/9-aspen_cf.avif";
import brooklyn_cf from "@/assets/products/beds/10-brooklyn_cf.avif";
import chanel_cf from "@/assets/products/beds/11-chanel_cf.avif";
import dakota_cf from "@/assets/products/beds/12-dakota_cf.avif";
import gloria_black_cf from "@/assets/products/beds/13-gloria_black_cf.avif";
import infinity_golden_cf from "@/assets/products/beds/14-infinity_golden_cf.avif";
import infinity_beige_cf from "@/assets/products/beds/15-infinity_beige_cf.avif";
import melrose_cf from "@/assets/products/beds/16-melrose_cf.avif";
import platinum_cf from "@/assets/products/beds/17-platinum_cf.avif";
import silvy_cf from "@/assets/products/beds/18-silvy_cf.avif";
import valencia_cf from "@/assets/products/beds/19-valencia_cf.avif";

//import office furniture
import deskBlack from "@/assets/products/office-furniture/desk-black.jpg";
import deskWood from "@/assets/products/office-furniture/desk-wood.jpg";
import deskWhite from "@/assets/products/office-furniture/desk-white.jpg";
import deskGlass from "@/assets/products/office-furniture/desk-glass.jpg";

// Product interface
export interface Product {
  id: string;
  title: string;
  image: string;
  category: string;
  isNew?: boolean;
  isTopSeller?: boolean;
  isCanadianMade?: boolean;
  price?: string;
  description?: string;
}

// All products data - organized by category
export const allProducts: Product[] = [
  // Office Products
  // { id: "1", title: "Office Desk - Style 3", image: deskBlack, category: "office", isNew: false, isTopSeller: true, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  // { id: "2", title: "Office Desk - Style 2", image: deskWood, category: "office", isNew: false, isCanadianMade: true, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  // { id: "3", title: "Office Desk - Style 1", image: deskWhite, category: "office", isNew: false, isTopSeller: true, isCanadianMade: true, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  // { id: "4", title: "Glass Office Desk", image: deskGlass, category: "office", isNew: true, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  
  // Bed Products
  { id: "5", title: "Elliot", image: elliot, category: "beds", isNew: true},
  { id: "6", title: "Crystal Black", image: crystalBlack, category: "beds", isNew: false, isTopSeller: true},
  { id: "19", title: "Shiney CF", image: shiney_cf, category: "beds", isTopSeller: true, description: "High quality bed with built in LEDs. Drawers at the front for added storage capabilities. "},
  { id: "7", title: "Crystal White", image: crystalWhite, category: "beds", isNew: false},
  { id: "8", title: "Tulip Black", image: tulipBlack, category: "beds", isNew: true, isTopSeller: true},
  { id: "9", title: "Coco 1321", image: coco1321, category: "beds", isNew: false},
  { id: "10", title: "NGSW2", image: ngsw2, category: "beds", isNew: false, isTopSeller: true},
  { id: "11", title: "NGSW5", image: ngsw5, category: "beds", isNew: true, isCanadianMade: false, isTopSeller: true},
  { id: "12", title: "NGSW6", image: ngsw6, category: "beds", isNew: false},
  { id: "13", title: "NGSW1", image: ngsw1, category: "beds", isCanadianMade: true},
  { id: "14", title: "NGSW", image: ngsw, category: "beds", isNew: false},
  { id: "15", title: "Tiffany 1311", image: tiffany1311, category: "beds", isNew: false},
  { id: "16", title: "Jasmine 1291", image: jasmine1291, category: "beds", isNew: false},
  { id: "17", title: "Maddison Black 1221", image: maddisonblack1221, category: "beds", isNew: false},
  { id: "18", title: "Linda 1271", image: linda1271, category: "beds", isNew: false},
  { id: "20", title: "Adriana CF", image: adriana_cf, category: "beds", isTopSeller: true, description: "This beautiful traditional style bed provides the perfect cozy feel to any bedroom. Available in Queen and King."},
  { id: "21", title: "Alana Blue CF", image: alana_blue_cf, category: "beds", isTopSeller: true, description: "Stylish, trendy, and sure to be the center of attention in your room! A perfect choice for a stylish room layout. Available in Queen and King."},
  { id: "22", title: "Alana Silver CF", image: alana_silver_cf, category: "beds", isTopSeller: false, description: "Stylish, trendy, and sure to be the center of attention in your room! A perfect choice for a stylish room layout. Available in Queen and King."},
  { id: "23", title: "Aspen CF", image: aspen_cf, category: "beds", isTopSeller: false, description: "This bed delivers a warm, cozy feel and is perfect for a traditional room. Available in Queen and King."},
  { id: "24", title: "Brooklyn CF", image: brooklyn_cf, category: "beds", isTopSeller: false, description: "Groovy and stylish, this bed is very trendy and is sure to add spice in your room. Available in Queen and King. "},
  { id: "25", title: "Chanel CF", image: chanel_cf, category: "beds", isTopSeller: false, description: "Sleek, elegant, and minimalistic design are the cornerstones of this bed. Easy decor, easy living. Available in Queen and King."},
  { id: "26", title: "Dakota CF", image: dakota_cf, category: "beds", isTopSeller: true, description: "A perfect blend of modern design and traditional aesthetic, this bed has it all. Reminiscent of Roman-Greek buildings, this bed is masterfully crafted. Available in Queen and King. "},
  { id: "27", title: "Gloria Black CF", image: gloria_black_cf, category: "beds", isTopSeller: false, description: "High style on a budget, this bed is fashionable and fit for any room. Available in Queen and King."},
  { id: "28", title: "Infinity Golden CF", image: infinity_golden_cf, category: "beds", isTopSeller: false, description: "A mighty bed, with exceptional design. Adds a cozy feeling to any room. Available in Queen and King. "},
  { id: "29", title: "Infinity Beige CF", image: infinity_beige_cf, category: "beds", isTopSeller: true, description: "A mighty bed, with exceptional design. Adds a cozy feeling to any room. Available in Queen and King. "},
  { id: "30", title: "Melrose CF", image: melrose_cf, category: "beds", isTopSeller: false, description: "This bed is strong, rustic, and elegant. An amazing bed to come home to every night. Available in Queen and King.  "},
  { id: "31", title: "Platinum CF", image: platinum_cf, category: "beds", isTopSeller: false, description: "This bed features a perfect blend between traditional design and modern functionality, this bed is a great choice. Available in Queen and King."},
  { id: "32", title: "Silvy CF", image: silvy_cf, category: "beds", isTopSeller: false, description: "This bed provides an elegant blend of traditional and modern beds. Designed with gothic architecture in mind, this bed is the right choice."},
  { id: "33", title: "Valencia CF", image: valencia_cf, category: "beds", isNew: true, description: "Smooth, clean, and elegant - just how life should be. This sleek bed is the perfect addition to your modern bedroom."},
  
  
  // Sofa Products
  // { id: "7", title: "3-Seater Sofa", image: deskWood, category: "sofas", isNew: false, isTopSeller: true, isCanadianMade: true, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  // { id: "8", title: "L-Shaped Sectional", image: deskWhite, category: "sofas", isNew: true, isTopSeller: true, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  // { id: "13", title: "Leather Recliner", image: deskGlass, category: "sofas", isNew: false, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  // { id: "14", title: "Modern Loveseat", image: deskBlack, category: "sofas", isNew: false, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  // { id: "15", title: "Corner Sofa Set", image: deskWood, category: "sofas", isNew: true, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  // { id: "16", title: "Fabric Armchair", image: deskWhite, category: "sofas", isNew: false, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  
  // // Dining Products
  // { id: "9", title: "Dining Table Set", image: deskWood, category: "dining", isNew: true, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  // { id: "10", title: "Modern Dining Chairs", image: deskBlack, category: "dining", isNew: false, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  // { id: "11", title: "Extendable Table", image: deskWhite, category: "dining", isNew: false, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  // { id: "12", title: "Glass Dining Table", image: deskGlass, category: "dining", isNew: true, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  // { id: "21", title: "Round Dining Table", image: deskWood, category: "dining", isNew: false, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  // { id: "22", title: "Bar Stools Set", image: deskBlack, category: "dining", isNew: true, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },

  // // Office Furniture Products
  // { id: "23", title: "Ergonomic Office Chair", image: deskBlack, category: "office-furniture", isNew: true, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  // { id: "24", title: "Executive Desk Chair", image: deskWood, category: "office-furniture", isNew: false, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  // { id: "25", title: "Filing Cabinet", image: deskWhite, category: "office-furniture", isNew: false, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  // { id: "26", title: "Bookshelf Unit", image: deskGlass, category: "office-furniture", isNew: true, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  // { id: "27", title: "Conference Table", image: deskBlack, category: "office-furniture", isNew: false, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  // { id: "28", title: "Office Storage Cabinet", image: deskWood, category: "office-furniture", isNew: false, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },

  // // Living Room Products
  // { id: "29", title: "Coffee Table", image: deskWhite, category: "living-room", isNew: true, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  // { id: "30", title: "TV Stand", image: deskGlass, category: "living-room", isNew: false, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  // { id: "31", title: "Side Table", image: deskBlack, category: "living-room", isNew: false, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  // { id: "32", title: "Entertainment Center", image: deskWood, category: "living-room", isNew: true, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  // { id: "33", title: "Console Table", image: deskWhite, category: "living-room", isNew: false, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  // { id: "34", title: "Accent Chair", image: deskGlass, category: "living-room", isNew: true, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },

  // // Bedroom Products
  // { id: "35", title: "Nightstand", image: deskBlack, category: "bedroom", isNew: false, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  // { id: "36", title: "Dresser", image: deskWood, category: "bedroom", isNew: true, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  // { id: "37", title: "Wardrobe", image: deskWhite, category: "bedroom", isNew: false, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  // { id: "38", title: "Vanity Table", image: deskGlass, category: "bedroom", isNew: true, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  // { id: "39", title: "Bedside Table", image: deskBlack, category: "bedroom", isNew: false, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  // { id: "40", title: "Chest of Drawers", image: deskWood, category: "bedroom", isNew: false, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },

  // // Storage Products
  // { id: "41", title: "Shelving Unit", image: deskWhite, category: "storage", isNew: true, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  // { id: "42", title: "Storage Cabinet", image: deskGlass, category: "storage", isNew: false, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  // { id: "43", title: "Bookcase", image: deskBlack, category: "storage", isNew: false, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  // { id: "44", title: "Wardrobe System", image: deskWood, category: "storage", isNew: true, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  // { id: "45", title: "Storage Ottoman", image: deskWhite, category: "storage", isNew: false, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  // { id: "46", title: "Organizer Unit", image: deskGlass, category: "storage", isNew: false, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },

  // // Lighting Products
  // { id: "47", title: "Table Lamp", image: deskBlack, category: "lighting", isNew: true, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  // { id: "48", title: "Floor Lamp", image: deskWood, category: "lighting", isNew: false, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  // { id: "49", title: "Ceiling Light", image: deskWhite, category: "lighting", isNew: false, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  // { id: "50", title: "Wall Sconce", image: deskGlass, category: "lighting", isNew: true, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  // { id: "51", title: "Pendant Light", image: deskBlack, category: "lighting", isNew: false, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  // { id: "52", title: "Desk Lamp", image: deskWood, category: "lighting", isNew: false, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },

  // // Decor Products
  // { id: "53", title: "Area Rug", image: deskWhite, category: "decor", isNew: true, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  // { id: "54", title: "Throw Pillows", image: deskGlass, category: "decor", isNew: false, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  // { id: "55", title: "Wall Art", image: deskBlack, category: "decor", isNew: false, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  // { id: "56", title: "Vase Set", image: deskWood, category: "decor", isNew: true, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  // { id: "57", title: "Mirror", image: deskWhite, category: "decor", isNew: false, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  // { id: "58", title: "Candle Holders", image: deskGlass, category: "decor", isNew: false, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },

  // // Mirror Products
  // { id: "59", title: "Wall Mirror", image: deskBlack, category: "mirrors", isNew: true, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  // { id: "60", title: "Floor Mirror", image: deskWood, category: "mirrors", isNew: false, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  // { id: "61", title: "Bathroom Mirror", image: deskWhite, category: "mirrors", isNew: false, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  // { id: "62", title: "Decorative Mirror", image: deskGlass, category: "mirrors", isNew: true, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  // { id: "63", title: "Full Length Mirror", image: deskBlack, category: "mirrors", isNew: false, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  // { id: "64", title: "Round Mirror", image: deskWood, category: "mirrors", isNew: false, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },

  // // Coffee Table Products
  // { id: "65", title: "Modern Coffee Table", image: deskWhite, category: "coffee-tables", isNew: true, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  // { id: "66", title: "Wooden Coffee Table", image: deskGlass, category: "coffee-tables", isNew: false, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  // { id: "67", title: "Glass Coffee Table", image: deskBlack, category: "coffee-tables", isNew: false, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  // { id: "68", title: "Nesting Coffee Tables", image: deskWood, category: "coffee-tables", isNew: true, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  // { id: "69", title: "Side Table Set", image: deskWhite, category: "coffee-tables", isNew: false, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  // { id: "70", title: "Lift Top Coffee Table", image: deskGlass, category: "coffee-tables", isNew: false, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },

  // // Console Table Products
  // { id: "71", title: "Entryway Console", image: deskBlack, category: "console-tables", isNew: true, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  // { id: "72", title: "Hallway Console", image: deskWood, category: "console-tables", isNew: false, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  // { id: "73", title: "Sofa Console", image: deskWhite, category: "console-tables", isNew: false, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  // { id: "74", title: "Narrow Console", image: deskGlass, category: "console-tables", isNew: true, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  // { id: "75", title: "Mirrored Console", image: deskBlack, category: "console-tables", isNew: false, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  // { id: "76", title: "Rustic Console", image: deskWood, category: "console-tables", isNew: false, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },

  // // Accent Products
  // { id: "77", title: "Accent Chair", image: deskWhite, category: "accents", isNew: true, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  // { id: "78", title: "Ottoman", image: deskGlass, category: "accents", isNew: false, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  // { id: "79", title: "Side Chair", image: deskBlack, category: "accents", isNew: false, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  // { id: "80", title: "Decorative Pillow", image: deskWood, category: "accents", isNew: true, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  // { id: "81", title: "Throw Blanket", image: deskWhite, category: "accents", isNew: false, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  // { id: "82", title: "Table Lamp", image: deskGlass, category: "accents", isNew: false, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },

  // // Accessory Products
  // { id: "83", title: "Vase Set", image: deskBlack, category: "accessories", isNew: true, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  // { id: "84", title: "Candle Holders", image: deskWood, category: "accessories", isNew: false, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  // { id: "85", title: "Picture Frames", image: deskWhite, category: "accessories", isNew: false, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  // { id: "86", title: "Bookends", image: deskGlass, category: "accessories", isNew: true, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  // { id: "87", title: "Tray Set", image: deskBlack, category: "accessories", isNew: false, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  // { id: "88", title: "Bowl Set", image: deskWood, category: "accessories", isNew: false, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },

  // // Entertainment Products
  // { id: "89", title: "TV Stand", image: deskWhite, category: "entertainment", isNew: true, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  // { id: "90", title: "Entertainment Center", image: deskGlass, category: "entertainment", isNew: false, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  // { id: "91", title: "Media Console", image: deskBlack, category: "entertainment", isNew: false, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  // { id: "92", title: "TV Cabinet", image: deskWood, category: "entertainment", isNew: true, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  // { id: "93", title: "Wall Mount Unit", image: deskWhite, category: "entertainment", isNew: false, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  // { id: "94", title: "Corner TV Stand", image: deskGlass, category: "entertainment", isNew: false, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
];

// Helper functions to get products by category
export const getProductsByCategory = (category: string): Product[] => {
  return allProducts.filter(product => product.category === category);
};

export const getProductById = (id: string): Product | undefined => {
  return allProducts.find(product => product.id === id);
};

export const getNewProducts = (): Product[] => {
  return allProducts.filter(product => product.isNew);
};

export const getFeaturedProducts = (limit: number = 4): Product[] => {
  return allProducts.slice(0, limit);
};

// Category names for display
export const categoryNames = {
  office: "Office",
  beds: "Beds", 
  sofas: "Sofas",
  dining: "Dining",
  "office-furniture": "Office Furniture",
  "living-room": "Living Room",
  bedroom: "Bedroom",
  storage: "Storage",
  lighting: "Lighting",
  decor: "Decor",
  mirrors: "Mirrors",
  "coffee-tables": "Coffee Tables",
  "console-tables": "Console Tables",
  accents: "Accents",
  accessories: "Accessories",
  entertainment: "Entertainment"
}; 