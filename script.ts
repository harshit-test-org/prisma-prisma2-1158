import { Photon } from '@prisma/photon'

const photon = new Photon()

// A `main` function so that we can use async/await
async function main() {
  const data = await photon.customers.findMany({
    where: {
      customerInfo: {
        products: {
          some: {
            name: { equals: 'test' },
            productGroup: {
              name: { equals: 'food' },
            },
          },
        },
      },
    },
  })
  console.log(data)
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await photon.disconnect()
  })
