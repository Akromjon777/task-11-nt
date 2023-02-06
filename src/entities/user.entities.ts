import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    length: 63,
    nullable: false,
  })
  first_name: string

  @Column({
    length: 63,
    nullable: false,
  })
  last_name: string

  @Column({
    length: 63,
    nullable: false,
  })
  email: string

  @Column({
    length: 63,
    nullable: false,
  })
  gender: string

  @Column({
    length: 63,
    nullable: false,
  })
  ip_address: string
}
