import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Insert Roles
  await prisma.role.createMany({
    data: [
      { roleName: 'SUPER' },
      { roleName: 'ADMIN' },
      { roleName: 'EDITOR' },
      { roleName: 'AUTHOR' },
      { roleName: 'VIEWER' },
    ],
  });

  // Insert Permissions
  await prisma.permission.createMany({
    data: [
      { permissionName: 'Manage Plugin', permissionCode: 7 },
      { permissionName: 'Manage Permissions', permissionCode: 8 },
      { permissionName: 'Manage Content Types', permissionCode: 9 },
      { permissionName: 'Manage Content Categories', permissionCode: 10 },
      { permissionName: 'Create Articles', permissionCode: 11 },
      { permissionName: 'Edit Articles', permissionCode: 12 },
      { permissionName: 'Delete Articles', permissionCode: 13 },
      { permissionName: 'Manage Media', permissionCode: 14 },
      { permissionName: 'View Articles', permissionCode: 15 },
      { permissionName: 'Manage Users', permissionCode: 16 },
      { permissionName: 'Manage Settings', permissionCode: 17 },
      { permissionName: 'Manage Website', permissionCode: 18 },
    ],
  });

  // Insert RolePermissions
  await prisma.rolePermission.createMany({
    data: [
      // Supper Permissions
      { roleId: 1, permissionId: 1 },
      { roleId: 1, permissionId: 2 },
      { roleId: 1, permissionId: 3 },
      { roleId: 1, permissionId: 4 },
      { roleId: 1, permissionId: 5 },
      { roleId: 1, permissionId: 6 },
      { roleId: 1, permissionId: 7 },
      { roleId: 1, permissionId: 8 },
      { roleId: 1, permissionId: 9 },
      { roleId: 1, permissionId: 10 },
      { roleId: 1, permissionId: 11 },
      { roleId: 1, permissionId: 12 },

      // Admin Permissions
      { roleId: 2, permissionId: 5 },
      { roleId: 2, permissionId: 6 },
      { roleId: 2, permissionId: 7 },
      { roleId: 2, permissionId: 8 },
      { roleId: 2, permissionId: 9 },
      { roleId: 2, permissionId: 10 },
      { roleId: 2, permissionId: 11 },
      { roleId: 2, permissionId: 12 },
      // Author Permissions
      { roleId: 3, permissionId: 5 },
      { roleId: 3, permissionId: 6 },
      { roleId: 3, permissionId: 7 },
      { roleId: 3, permissionId: 8 },
      { roleId: 3, permissionId: 9 },
      // Editor Permissions
      { roleId: 4, permissionId: 8 },
    ],
  });
  await prisma.contentType.createMany({
    data: [
      { typeName: 'News', slug: 'news' },
      { typeName: 'Blogs', slug: 'blogs' },
      { typeName: 'About Page', slug: 'about-page' },
      { typeName: 'Product Page', slug: 'product-page' },
    ],
  });

  // Insert Content Categories
  await prisma.contentCategory.createMany({
    data: [
      { categoryName: 'Technology', slug: 'technology' },
      { categoryName: 'Lifestyle', slug: 'lifestyle' },
      { categoryName: 'Business', slug: 'business' },
      { categoryName: 'Health', slug: 'health' },
    ],
  });
  await prisma.user.create({
    data: {
      fullName: 'John Doe',
      username: 'johndoe',
      email: 'john.doe@example.com',
      passwordHash: 'hashedpassword123',
      roleId: 1, // Assuming the role 'ADMIN' has id 1
    },
  });
  // Example Insert into Contents
  await prisma.contents.create({
    data: {
      title: 'My First Blog Post',
      slug: 'my-first-blog-post',
      body: 'This is the body of my first blog post.',
      userId: 1, // Assuming the author with user_id 1 exists
      contentTypeId: 2, // Assuming the content type 'Blog' has content_type_id 2
      categoryId: 1, // Assuming the category 'Technology' has category_id 1
      status: 'Published',
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });