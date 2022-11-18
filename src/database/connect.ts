import { createConnection } from 'typeorm'

createConnection().then(() => console.log('conecto no banco n acredito'))

// import { AppDataSource } from '../data-source'

// AppDataSource.initialize().then(() => console.log('entro'))
