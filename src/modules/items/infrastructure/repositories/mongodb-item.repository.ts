// // infrastructure/repositories/mongodb-item.repository.ts
// import { Injectable } from '@nestjs/common'
// import { ItemRepository } from '../../domain/repositories/item-repository.interface'
// import { Item } from '../../domain/entities/item.entity'

// @Injectable()
// export class MongoDbItemRepository implements ItemRepository {
//   async save(item: Item): Promise<Item> {
//     // Implementación concreta para guardar en MongoDB
//     return savedItem
//   }

//   async findById(id: string): Promise<Item | null> {
//     // Implementación concreta para buscar en MongoDB
//     return foundItem
//   }

//   async findAll(): Promise<Item[]> {
//     // Implementación concreta para obtener todos los ítems
//     return allItems
//   }

//   async deleteById(id: string): Promise<void> {
//     // Implementación concreta para eliminar por ID
//   }
// }
