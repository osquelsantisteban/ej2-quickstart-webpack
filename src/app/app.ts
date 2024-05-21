import { DocumentEditorContainer, Toolbar } from '@syncfusion/ej2-documenteditor';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

// Inyectar el módulo Toolbar
DocumentEditorContainer.Inject(Toolbar);

const documentEditorElement = document.getElementById('DocumentEditor');
if (documentEditorElement) {
    // Comprobar si ya hay un hijo en el contenedor para evitar duplicados
    if (documentEditorElement.children.length === 0) {
        let container: DocumentEditorContainer = new DocumentEditorContainer({
            enableToolbar: true,
            height: '600px'
        });
        container.appendTo(documentEditorElement);
    }
}

// Ocultar el cargador y mostrar el contenedor
const loader = document.getElementById('loader');
if (loader) {
    loader.style.display = 'none';
}

const containerElement = document.getElementById('container');
if (containerElement) {
    containerElement.style.visibility = 'visible';
}
