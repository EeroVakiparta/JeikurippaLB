import {Entity, model, property} from '@loopback/repository';

@model()
export class Location extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'number',
    required: true,
  })
  x: number;

  @property({
    type: 'number',
    required: true,
  })
  y: number;

  @property({
    type: 'string',
    required: true,
  })
  background: string;

  @property({
    type: 'string',
    default: Insert lore here,
  })
  lore?: string;


  constructor(data?: Partial<Location>) {
    super(data);
  }
}

export interface LocationRelations {
  // describe navigational properties here
}

export type LocationWithRelations = Location & LocationRelations;
