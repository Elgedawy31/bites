import {z} from 'zod'

export const RestaurantScheama = z.object({
  name: z.string().min(1 , 'Name is required'),
  location: z.string().min(1 , 'Location is required'),
  cuisions:z.array(z.string().min(1 )),
})

export const RestaurantDetailsSchema = z.object({
  links: z.array(z.object({
    name:z.string().min(1),
    url:z.string().min(1)
  })),
  contact:z.object({
    phone:z.string().min(1),
    email:z.string().email()
  })
})


export type restaurant = z.infer<typeof RestaurantScheama>
export type restaurantDetails = z.infer<typeof RestaurantDetailsSchema>