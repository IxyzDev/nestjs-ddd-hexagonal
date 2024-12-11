sequenceDiagram
    participant C as Ciudadano
    participant EP as Ejecutivo_Plataforma
    participant EX as Excel(Ventanilla_Única)
    participant A1 as Administrativo 1
    participant JP as Jefatura de Patentes
    participant A2 as Administrativo 2
    participant JD as Jefatura de departamento
    participant A3 as Administrativo 3
    participant E as Estafeta
    participant FSM as Funcionario Secretaría Municipal
    participant SM as Secretaría Municipal
    participant A4 as Administrativo 4
    participant A5 as Administrativo 5
    participant CAS as CAS Chile

    C->>EP: Solicita formulario y requisitos
    EP->>C: Entrega formulario y documentos requeridos
    C->>EP: Devuelve formulario y documentación
    EP->>EX: Registra ingreso en Ventanilla Única
    EP->>A1: Informa documentación disponible
    A1->>EX: Actualiza estado
    A1->>JP: Documentación lista para validación
    JP->>JP: Revisa y valida documentos
    JP->>A2: Solicita confeccionar Decreto
    A2->>JD: Envía Decreto para validación
    JD->>JD: Valida, registra y firma Decreto
    JD->>A3: Indica entregar documentos a Estafeta
    A3->>E: Entrega documentación
    E->>FSM: Lleva documentación a Secretaría Municipal
    FSM->>SM: Entrega documentación
    SM->>E: Devuelve documentación firmada
    E->>A4: Entrega documentación firmada
    A4->>EX: Registra ingreso final
    A4->>A5: Indica proceder con creación de patente
    A5->>CAS: Crea patente y devenga valores
    A5->>C: Informa emisión de patente y valores a pagar
