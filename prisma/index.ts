import { PrismaClient } from '@prisma/client'
import { create } from 'domain'

const prisma = new PrismaClient()

async function main() {
  // 自動トランザクション
  // const addUser = await prisma.user.create({
  //   data: {
  //     name: 'joy',
  //     email: 'joy@enjoy.com',
  //     profile: {
  //       create: {
  //         bio: 'yarn create vite',
  //       }
  //     }
  //   }
  // })

  // console.log(addUser)

  // 手動トランザクション
  const [user, post, totalPosts] = await prisma.$transaction([
    prisma.user.create({
      data: {
        name: 'mike',
        email: 'mike@example.com',
        profile: {
            create: {
                bio: 'I like turtles',
            }
        }
      }
    }),
    prisma.post.create({
      data: {
        title: 'sample post'
      }
    }),
    prisma.post.count(),
  ])

  console.log(user, post, totalPosts)
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })


