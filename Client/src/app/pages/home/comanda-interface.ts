export interface Comanda {
    id: number;
    abertura: Date;
    fechamento?: Date | null;
}