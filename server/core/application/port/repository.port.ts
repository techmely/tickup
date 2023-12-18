import type { StringEnum } from "@techmely/types";

/*  Most of repositories will probably need generic 
    save/find/delete operations, so it's easier
    to have some shared interfaces.
    More specific queries should be defined
    in a respective repository.
*/

export class Paginated<T> {
  readonly count: number;
  readonly limit: number;
  readonly page: number;
  readonly data: readonly T[];

  constructor(props: Paginated<T>) {
    this.count = props.count;
    this.limit = props.limit;
    this.page = props.page;
    this.data = props.data;
  }
}

export type OrderBy = { field: string | true; param: "asc" | "desc" };

export type PaginatedQueryParams = {
  limit: number;
  page: number;
  offset: number;
  orderBy: OrderBy;
};

export interface RepositoryPort<Entity> {
  findOneById(id: string): Promise<Partial<Entity>>;
  findOneByKey(key: StringEnum<keyof Entity>): Promise<Partial<Entity>>;
  findAll(): Promise<Entity[]>;
  findAllPaginated(params: PaginatedQueryParams): Promise<Paginated<Entity>>;

  insert(entity: Entity | Entity[]): Promise<void>;
  insertBulk(entity: Entity | Entity[]): Promise<void>;

  update(entity: Entity | Entity[]): Promise<void> | Promise<Entity | Entity[]>;
  updateBulk(entity: Entity | Entity[]): Promise<void> | Promise<Entity | Entity[]>;

  delete(entity: Entity): Promise<boolean>;
  deleteBulk(entity: Entity): Promise<boolean>;

  transaction<T>(handler: () => Promise<T>): Promise<T>;
}
