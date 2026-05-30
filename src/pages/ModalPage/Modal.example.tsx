import { Button, Modal, Typography } from "banji-ui";

const Example = () => {
	return (
		<Modal>
			<Modal.Trigger>
				<Button>Abrir</Button>
			</Modal.Trigger>
			<Modal.Content className="overflow-y-hidden flex">
				<Modal.Backdrop />
				<div className="grid grid-rows-[auto_1fr_auto] gap-4 w-full">
					<Typography.H2>Contenido</Typography.H2>
					<div className="overflow-y-scroll h-full flex-1">
						<p>Veremos si el contenido se ajusta al tamaño de la ventana.</p>
					</div>
					<div className="flex justify-end flex-1 gap-4">
						<Modal.Backdrop asChild>
							<Button variant="outline">Cerrar</Button>
						</Modal.Backdrop>
						<Modal.Backdrop asChild>
							<Button>Aceptar</Button>
						</Modal.Backdrop>
					</div>
				</div>
			</Modal.Content>
		</Modal>
	);
};

export default Example;
