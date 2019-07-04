import { Cuenta } from './cuenta';
import { DetalleMov } from './detalle-mov';

export class Movimiento {
id: number;
descripcion: string;
fechaHora: Date;
monto: number;
idCuenta: number;
cuenta: Cuenta;
detalleMov: DetalleMov[];
}
