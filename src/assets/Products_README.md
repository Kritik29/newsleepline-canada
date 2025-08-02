# Assets Organization

This directory contains all the assets for the New Sleep Line Canada website, organized for easy management of hundreds of products.

## Directory Structure

```
assets/
├── backgrounds/          # Background images (hero, etc.)
├── logos/               # Company logos and branding
└── products/            # Product images organized by category
    ├── beds/            # Bed and bedroom furniture images
    ├── dining/          # Dining table and chair images
    ├── office/          # Office desk and furniture images
    └── sofas/           # Sofa and living room furniture images
```

## Adding New Products

### 1. Add Product Images
Place your product images in the appropriate category folder:
- `products/beds/` for bed frames, headboards, etc.
- `products/sofas/` for sofas, loveseats, armchairs, etc.
- `products/dining/` for dining tables, chairs, bar stools, etc.
- `products/office/` for office desks, chairs, storage, etc.

### 2. Import the Image
Add the import statement at the top of `src/data/products.ts`:

```typescript
import newProductImage from "@/assets/products/category/new-product-image.jpg";
```

### 3. Add Product Data
Add the product to the `allProducts` array in `src/data/products.ts`:

```typescript
{
  id: "23", // Use the next available ID
  title: "Your Product Name",
  image: newProductImage,
  category: "beds", // or "sofas", "dining", "office"
  isNew: true, // Set to true for new arrivals
  price: "$599", // Optional
  description: "Product description" // Optional
}
```

### 4. Image Naming Convention
- Use descriptive names: `modern-queen-bed.jpg`
- Use lowercase with hyphens
- Include the category in the name if helpful: `dining-table-set-6-seater.jpg`

## Managing "New Arrival" Banner

### Adding New Arrival Banner
Set `isNew: true` in the product data:

```typescript
{
  id: "23",
  title: "Modern Queen Bed",
  image: modernQueenBed,
  category: "beds",
  isNew: true, // This will show the "New Arrival" banner
}
```

### Removing New Arrival Banner
Set `isNew: false` or remove the property entirely:

```typescript
{
  id: "23",
  title: "Modern Queen Bed",
  image: modernQueenBed,
  category: "beds",
  isNew: false, // Banner will be removed
}
```

### Bulk Update New Arrivals
To update multiple products at once, you can use the helper function:

```typescript
// In src/data/products.ts, add this function:
export const updateNewArrivals = (productIds: string[], isNew: boolean) => {
  allProducts.forEach(product => {
    if (productIds.includes(product.id)) {
      product.isNew = isNew;
    }
  });
};

// Usage:
updateNewArrivals(["23", "24", "25"], false); // Remove new arrival from products 23, 24, 25
```

## Updating Existing Products

### 1. Update Product Information
Modify the product object in `src/data/products.ts`:

```typescript
// Find the product in allProducts array and update:
{
  id: "5", // Keep the same ID
  title: "Updated Product Name", // Change title
  image: newImage, // Change image
  category: "sofas", // Change category
  isNew: false, // Update new arrival status
  price: "$699", // Update price
  description: "Updated description" // Update description
}
```

### 2. Update Product Image
1. Replace the image file in the appropriate category folder
2. Update the import statement in `src/data/products.ts` if the filename changed
3. Update the `image` property in the product data

### 3. Change Product Category
1. Move the image file to the new category folder
2. Update the import path in `src/data/products.ts`
3. Update the `category` property in the product data

## Deleting Products

### 1. Remove Product Data
Delete the product object from the `allProducts` array in `src/data/products.ts`:

```typescript
// Remove this entire object:
{
  id: "23",
  title: "Product to Delete",
  image: productImage,
  category: "beds",
  isNew: false
}
```

### 2. Remove Image File
Delete the image file from the appropriate category folder:
```bash
rm src/assets/products/beds/product-to-delete.jpg
```

### 3. Remove Import Statement
Remove the import statement from `src/data/products.ts`:
```typescript
// Remove this line:
import productImage from "@/assets/products/beds/product-to-delete.jpg";
```

### 4. Update IDs (Optional)
If you want to maintain sequential IDs, you can renumber the remaining products:

```typescript
// Helper function to renumber products:
export const renumberProducts = () => {
  allProducts.forEach((product, index) => {
    product.id = (index + 1).toString();
  });
};
```

## Bulk Operations

### Add Multiple Products
```typescript
// Add multiple products at once:
const newProducts = [
  {
    id: "23",
    title: "Product 1",
    image: product1Image,
    category: "beds",
    isNew: true
  },
  {
    id: "24", 
    title: "Product 2",
    image: product2Image,
    category: "sofas",
    isNew: false
  }
];

allProducts.push(...newProducts);
```

### Update Multiple Products
```typescript
// Update multiple products by category:
allProducts.forEach(product => {
  if (product.category === "beds") {
    product.isNew = false; // Remove new arrival from all beds
  }
});
```

### Delete Multiple Products
```typescript
// Delete products by category:
allProducts = allProducts.filter(product => product.category !== "office");

// Delete products by ID:
const idsToDelete = ["23", "24", "25"];
allProducts = allProducts.filter(product => !idsToDelete.includes(product.id));
```

## File Types Supported
- **Images**: JPG, PNG, AVIF, WebP
- **Logos**: AVIF, PNG, SVG
- **Backgrounds**: JPG, PNG

## Best Practices
1. **Optimize images** before adding them (compress for web)
2. **Use consistent dimensions** for similar product types
3. **Include alt text** in the product data for accessibility
4. **Test on mobile** to ensure images load properly
5. **Keep file sizes reasonable** (under 500KB for product images)
6. **Backup before bulk changes** to avoid data loss
7. **Use descriptive filenames** for easy identification
8. **Maintain consistent ID format** (string format recommended)

## Helper Functions
The `src/data/products.ts` file includes helper functions:
- `getProductsByCategory(category)` - Get all products in a category
- `getProductById(id)` - Find a specific product
- `getNewProducts()` - Get all new arrival products
- `getFeaturedProducts(limit)` - Get featured products for homepage

## Adding New Categories
1. Create a new folder in `products/`
2. Add the category to the `categoryNames` object in `src/data/products.ts`
3. Update any category-specific logic as needed

## Troubleshooting

### Product Not Showing
- Check that the image import path is correct
- Verify the product is in the `allProducts` array
- Ensure the category name matches exactly

### Image Not Loading
- Check file path and extension
- Verify image file exists in the correct folder
- Ensure import statement is correct

### Quick View Not Working
- Verify product ID is unique
- Check that the product exists in `allProducts`
- Ensure the route `/product/:id` is working

### New Arrival Banner Not Showing
- Check that `isNew: true` is set
- Verify the ProductCard component is using the `isNew` prop
- Clear browser cache if needed 