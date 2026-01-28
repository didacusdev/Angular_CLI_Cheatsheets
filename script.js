// Angular CLI Commands Data
const angularCommands = [
  {
    category: "Proyecto",
    commands: [
      {
        name: "new",
        short: "n",
        description: "Crea un nuevo espacio de trabajo de Angular y una aplicación inicial",
        longForm: "ng new [nombre-proyecto]",
        shortForm: "ng n [nombre-proyecto]",
        examples: [
          "ng new my-app",
          "ng new my-app --routing --style=scss",
          "ng new my-app --standalone",
          "ng new my-app --package-manager=pnpm",
          "ng new my-app --skip-git --skip-install"
        ]
      },
      {
        name: "serve",
        short: "s",
        description: "Construye y sirve la aplicación, reconstruyendo cuando hay cambios en archivos",
        longForm: "ng serve",
        shortForm: "ng s",
        examples: [
          "ng serve",
          "ng serve --open",
          "ng serve --port 4300",
          "ng serve --host 0.0.0.0",
          "ng serve --ssl",
          "ng serve --configuration production"
        ]
      },
      {
        name: "build",
        short: "b",
        description: "Compila la aplicación Angular en un directorio de salida",
        longForm: "ng build",
        shortForm: "ng b",
        examples: [
          "ng build",
          "ng build --configuration production",
          "ng build --base-href=/my-app/",
          "ng build --output-path=dist/custom",
          "ng build --stats-json",
          "ng build --source-map"
        ]
      },
      {
        name: "test",
        short: "t",
        description: "Ejecuta las pruebas unitarias en el proyecto",
        longForm: "ng test",
        shortForm: "ng t",
        examples: [
          "ng test",
          "ng test --watch=false",
          "ng test --code-coverage",
          "ng test --browsers=ChromeHeadless",
          "ng test --include='**/*.spec.ts'"
        ]
      },
      {
        name: "version",
        short: "v",
        description: "Muestra la versión de Angular CLI y dependencias",
        longForm: "ng version",
        shortForm: "ng v",
        examples: ["ng version", "ng v"]
      },
      {
        name: "completion",
        short: null,
        description: "Configura el autocompletado de comandos Angular CLI en tu terminal",
        longForm: "ng completion",
        shortForm: null,
        examples: ["ng completion"]
      }
    ]
  },
  {
    category: "Generación",
    commands: [
      {
        name: "generate component",
        short: "g c",
        description: "Genera un nuevo componente",
        longForm: "ng generate component [nombre]",
        shortForm: "ng g c [nombre]",
        examples: [
          "ng g c my-component",
          "ng g c my-component --skip-tests",
          "ng g c my-component --skip-tests --style=none",
          "ng g c pages/home --standalone",
          "ng g c features/users/user-list --skip-tests --standalone",
          "ng g c user --dry-run",
          "ng g c product --flat",
          "ng g c header --inline-style --inline-template",
          "ng g c button -t -s --skip-tests",
          "ng g c admin/dashboard --change-detection=OnPush",
          "ng g c shared/card --display-block",
          "ng g c navbar --export --module=shared",
          "ng g c ui/modal --view-encapsulation=None",
          "ng g c pages/about --style=scss --prefix=app",
          "ng g c components/form --no-standalone",
          "ng g c widgets/chart --skip-import"
        ]
      },

      {
        name: "generate service",
        short: "g s",
        description: "Genera un nuevo servicio",
        longForm: "ng generate service [nombre]",
        shortForm: "ng g s [nombre]",
        examples: [
          "ng g s services/data",
          "ng g s auth --skip-tests",
          "ng g s core/api/user --skip-tests",
          "ng g s shared/logger --flat",
          "ng g s api --flat --skip-tests",
          "ng g s services/auth --dry-run",
          "ng g s http --project=my-app",
          "ng g s core/storage"
        ]
      },
      {
        name: "generate module",
        short: "g m",
        description: "Genera un nuevo módulo NgModule",
        longForm: "ng generate module [nombre]",
        shortForm: "ng g m [nombre]",
        examples: [
          "ng g m shared",
          "ng g m core --routing",
          "ng g m features/admin --routing",
          "ng g m admin --module=app",
          "ng g m pages/dashboard --flat",
          "ng g m feature --routing --routing-scope=Child",
          "ng g m shared -d",
          "ng g m lazy-module --route=lazy --module=app"
        ]
      },
      {
        name: "generate directive",
        short: "g d",
        description: "Genera una nueva directiva",
        longForm: "ng generate directive [nombre]",
        shortForm: "ng g d [nombre]",
        examples: [
          "ng g d directives/highlight",
          "ng g d custom-dir --skip-tests",
          "ng g d shared/tooltip --standalone",
          "ng g d highlight --standalone --skip-tests",
          "ng g d validators/email --flat",
          "ng g d directives/auto-focus --export --module=shared",
          "ng g d click-outside --skip-import",
          "ng g d highlight -d",
          "ng g d shared/directives/permission --prefix=app"
        ]
      },
      {
        name: "generate pipe",
        short: "g p",
        description: "Genera un nuevo pipe",
        longForm: "ng generate pipe [nombre]",
        shortForm: "ng g p [nombre]",
        examples: [
          "ng g p pipes/custom",
          "ng g p format-date --skip-tests",
          "ng g p shared/filter --standalone",
          "ng g p currency --standalone --skip-tests",
          "ng g p pipes/safe-html --flat",
          "ng g p truncate --export --module=shared",
          "ng g p custom-date --skip-import",
          "ng g p filter -d",
          "ng g p shared/pipes/highlight"
        ]
      },
      {
        name: "generate guard",
        short: "g g",
        description: "Genera un nuevo guard de ruta (funcional por defecto en Angular 15+)",
        longForm: "ng generate guard [nombre]",
        shortForm: "ng g g [nombre]",
        examples: [
          "ng g g auth",
          "ng g g guards/admin --skip-tests",
          "ng g g can-load --functional",
          "ng g g admin --functional --skip-tests",
          "ng g g core/guards/role --flat",
          "ng g g auth --implements=CanActivate,CanActivateChild",
          "ng g g permission --implements=CanMatch",
          "ng g g unsaved-changes --implements=CanDeactivate",
          "ng g g auth -d"
        ]
      },
      {
        name: "generate interceptor",
        short: "g interceptor",
        description: "Genera un nuevo interceptor HTTP (funcional por defecto en Angular 15+)",
        longForm: "ng generate interceptor [nombre]",
        shortForm: "ng g interceptor [nombre]",
        examples: [
          "ng g interceptor auth",
          "ng g interceptor auth --skip-tests",
          "ng g interceptor core/interceptors/error",
          "ng g interceptor jwt --functional",
          "ng g interceptor logging --functional --skip-tests",
          "ng g interceptor http-error --flat",
          "ng g interceptor token --project=my-app"
        ]
      },
      {
        name: "generate interface",
        short: "g i",
        description: "Genera una nueva interfaz TypeScript",
        longForm: "ng generate interface [nombre]",
        shortForm: "ng g i [nombre]",
        examples: [
          "ng g i models/user",
          "ng g i product",
          "ng g i core/interfaces/api-response",
          "ng g i models/user model",
          "ng g i shared/types/config data",
          "ng g i user -d",
          "ng g i models/dto/user-dto"
        ]
      },
      {
        name: "generate class",
        short: "g cl",
        description: "Genera una nueva clase TypeScript",
        longForm: "ng generate class [nombre]",
        shortForm: "ng g cl [nombre]",
        examples: [
          "ng g cl models/user",
          "ng g cl models/user --skip-tests",
          "ng g cl utils/helper",
          "ng g cl core/classes/validator --skip-tests",
          "ng g cl user --type=model",
          "ng g cl helpers/string-helper --type=helper",
          "ng g cl user -d"
        ]
      },
      {
        name: "generate enum",
        short: "g e",
        description: "Genera un nuevo enum TypeScript",
        longForm: "ng generate enum [nombre]",
        shortForm: "ng g e [nombre]",
        examples: [
          "ng g e enums/status",
          "ng g e user-role",
          "ng g e core/enums/priority",
          "ng g e status --type=enum",
          "ng g e shared/enums/http-status",
          "ng g e role -d"
        ]
      },
      {
        name: "generate resolver",
        short: "g r",
        description: "Genera un nuevo resolver de ruta (funcional por defecto en Angular 15+)",
        longForm: "ng generate resolver [nombre]",
        shortForm: "ng g r [nombre]",
        examples: [
          "ng g r user",
          "ng g r user --skip-tests",
          "ng g r core/resolvers/data",
          "ng g r product --functional",
          "ng g r data --functional --skip-tests",
          "ng g r user-details --flat",
          "ng g r resolvers/product-list"
        ]
      },
      {
        name: "generate web-worker",
        short: "g web-worker",
        description: "Genera un nuevo Web Worker",
        longForm: "ng generate web-worker [nombre]",
        shortForm: "ng g web-worker [nombre]",
        examples: [
          "ng g web-worker app",
          "ng g web-worker workers/data-processor"
        ]
      },
      {
        name: "generate service-worker",
        short: "g service-worker",
        description: "Configura el service worker de Angular PWA",
        longForm: "ng generate service-worker",
        shortForm: "ng g service-worker",
        examples: ["ng g service-worker", "ng add @angular/pwa"]
      },
      {
        name: "generate application",
        short: "g application",
        description: "Genera una nueva aplicación en el workspace",
        longForm: "ng generate application [nombre]",
        shortForm: "ng g application [nombre]",
        examples: [
          "ng g application admin",
          "ng g application mobile --routing --style=scss"
        ]
      },
      {
        name: "generate library",
        short: "g library",
        description: "Genera una nueva biblioteca en el workspace",
        longForm: "ng generate library [nombre]",
        shortForm: "ng g library [nombre]",
        examples: [
          "ng g library my-lib",
          "ng g library ui-components --prefix=ui"
        ]
      },
      {
        name: "generate environments",
        short: "g environments",
        description: "Genera archivos de configuración de entornos",
        longForm: "ng generate environments",
        shortForm: "ng g environments",
        examples: ["ng g environments"]
      },
      {
        name: "generate config",
        short: "g config",
        description: "Genera archivos de configuración específicos",
        longForm: "ng generate config [tipo]",
        shortForm: "ng g config [tipo]",
        examples: [
          "ng g config karma",
          "ng g config browserslist"
        ]
      },
      {
        name: "generate (opciones globales)",
        short: "g",
        description: "Opciones comunes para todos los comandos generate",
        longForm: "ng generate [schematic] [opciones]",
        shortForm: "ng g [schematic] [opciones]",
        examples: [
          "ng g c button --dry-run",
          "ng g s api --skip-tests",
          "ng g m shared --flat",
          "ng g c header --project=admin",
          "ng g d highlight --export",
          "ng g p filter --module=shared",
          "ng g c pages/home/components/hero --skip-tests",
          "ng g s core/services/auth/token --flat --skip-tests",
          "ng g i models/dto/user-response model",
          "ng g --help"
        ]
      }
    ]
  },
  {
    category: "Configuración",
    commands: [
      {
        name: "config",
        short: null,
        description: "Obtiene o establece valores de configuración de Angular",
        longForm: "ng config [clave] [valor]",
        shortForm: null,
        examples: [
          "ng config",
          "ng config cli.packageManager yarn",
          "ng config cli.analytics false",
          "ng config schematics.@schematics/angular:component.style scss"
        ]
      },
      {
        name: "add",
        short: null,
        description: "Agrega soporte para una librería externa al proyecto",
        longForm: "ng add [paquete]",
        shortForm: null,
        examples: [
          "ng add @angular/material",
          "ng add @ngrx/store",
          "ng add @angular/pwa",
          "ng add @angular/fire",
          "ng add @nguniversal/express-engine"
        ]
      },
      {
        name: "update",
        short: null,
        description: "Actualiza la aplicación y sus dependencias",
        longForm: "ng update",
        shortForm: null,
        examples: [
          "ng update",
          "ng update @angular/core @angular/cli",
          "ng update @angular/core --next",
          "ng update --all",
          "ng update @angular/material --force"
        ]
      }
    ]
  },
  {
    category: "Análisis y Optimización",
    commands: [
      {
        name: "lint",
        short: null,
        description: "Ejecuta herramientas de linting en el código del proyecto",
        longForm: "ng lint",
        shortForm: null,
        examples: [
          "ng lint",
          "ng lint --fix",
          "ng lint --force",
          "ng lint --format stylish"
        ]
      },
      {
        name: "e2e",
        short: "e",
        description: "Construye y sirve la aplicación, luego ejecuta pruebas end-to-end",
        longForm: "ng e2e",
        shortForm: "ng e",
        examples: [
          "ng e2e",
          "ng e2e --watch",
          "ng e2e --configuration production"
        ]
      },
      {
        name: "analytics",
        short: null,
        description: "Configura la recopilación de análisis de uso de Angular CLI",
        longForm: "ng analytics",
        shortForm: null,
        examples: [
          "ng analytics",
          "ng analytics on",
          "ng analytics off",
          "ng analytics prompt"
        ]
      }
    ]
  },
  {
    category: "Despliegue",
    commands: [
      {
        name: "deploy",
        short: null,
        description: "Invoca el constructor de despliegue para el proyecto",
        longForm: "ng deploy",
        shortForm: null,
        examples: [
          "ng deploy",
          "ng deploy --configuration production",
          "ng deploy --base-href=/app/"
        ]
      },
      {
        name: "extract-i18n",
        short: null,
        description: "Extrae mensajes i18n del código fuente",
        longForm: "ng extract-i18n",
        shortForm: null,
        examples: [
          "ng extract-i18n",
          "ng extract-i18n --output-path locale",
          "ng extract-i18n --format xlf2",
          "ng extract-i18n --out-file messages.xlf"
        ]
      }
    ]
  },
  {
    category: "Herramientas",
    commands: [
      {
        name: "doc",
        short: "d",
        description: "Abre la documentación oficial de Angular en el navegador",
        longForm: "ng doc [término-búsqueda]",
        shortForm: "ng d [término-búsqueda]",
        examples: [
          "ng doc HttpClient",
          "ng d router",
          "ng doc FormControl"
        ]
      },
      {
        name: "run",
        short: null,
        description: "Ejecuta un objetivo de arquitecto con una configuración personalizada",
        longForm: "ng run [proyecto:arquitecto:configuración]",
        shortForm: null,
        examples: [
          "ng run my-app:build:production",
          "ng run my-app:server",
          "ng run my-lib:build"
        ]
      },
      {
        name: "cache",
        short: null,
        description: "Gestiona la caché de Angular CLI",
        longForm: "ng cache",
        shortForm: null,
        examples: [
          "ng cache clean",
          "ng cache info",
          "ng cache enable",
          "ng cache disable"
        ]
      }
    ]
  }
];

// Function to copy text to clipboard
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    showToast();
  }).catch(err => {
    console.error('Error al copiar: ', err);
  });
}

// Function to show toast notification
function showToast() {
  const toast = document.getElementById('toast');
  toast.classList.remove('translate-x-96');
  toast.classList.add('translate-x-0');

  setTimeout(() => {
    toast.classList.remove('translate-x-0');
    toast.classList.add('translate-x-96');
  }, 2000);
}

// Function to create command card
function createCommandCard(command) {
  const hasShortForm = command.shortForm !== null;
  const commandId = `command-${command.name.replace(/\s+/g, '-')}`;

  return `
        <div id="${commandId}" class="command-card bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-red-500 transition-all duration-300 shadow-lg hover:shadow-red-500/20">
            <div class="flex items-start justify-between mb-4">
                <div class="flex-1">
                    <h3 class="text-xl font-bold text-red-400 mb-2">${command.name}</h3>
                    <p class="text-gray-300 text-sm leading-relaxed">${command.description}</p>
                </div>
            </div>
            
            <div class="space-y-3">
                <!-- Long Form -->
                <div class="bg-gray-900 rounded-lg p-4 border border-gray-700">
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-xs text-gray-500 font-semibold uppercase">Forma completa</span>
                        <button 
                            onclick="copyToClipboard('${command.longForm}')"
                            class="copy-btn px-3 py-1 bg-red-600 hover:bg-red-700 rounded text-xs font-medium transition-colors duration-200 flex items-center gap-2"
                        >
                            <i class="fas fa-copy"></i>
                            Copiar
                        </button>
                    </div>
                    <code class="text-green-400 text-sm font-mono">${command.longForm}</code>
                </div>
                
                ${hasShortForm ? `
                <!-- Short Form -->
                <div class="bg-gray-900 rounded-lg p-4 border border-gray-700">
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-xs text-gray-500 font-semibold uppercase">Forma abreviada</span>
                        <button 
                            onclick="copyToClipboard('${command.shortForm}')"
                            class="copy-btn px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded text-xs font-medium transition-colors duration-200 flex items-center gap-2"
                        >
                            <i class="fas fa-copy"></i>
                            Copiar
                        </button>
                    </div>
                    <code class="text-blue-400 text-sm font-mono">${command.shortForm}</code>
                </div>
                ` : ''}
                
                <!-- Examples -->
                ${command.examples.length > 0 ? `
                <div class="mt-4">
                    <p class="text-xs text-gray-500 font-semibold uppercase mb-2">Ejemplos:</p>
                    <div class="space-y-2">
                        ${command.examples.map(example => `
                            <div class="flex items-center justify-between bg-gray-900/50 rounded px-3 py-2 border border-gray-700/50">
                                <code class="text-xs text-gray-400 font-mono">${example}</code>
                                <button 
                                    onclick="copyToClipboard('${example}')"
                                    class="text-gray-500 hover:text-gray-300 transition-colors"
                                    title="Copiar ejemplo"
                                >
                                    <i class="fas fa-copy text-xs"></i>
                                </button>
                            </div>
                        `).join('')}
                    </div>
                </div>
                ` : ''}
            </div>
        </div>
    `;
}

// Function to render all commands
function renderCommands(filteredCommands = angularCommands) {
  const container = document.getElementById('commandsContainer');
  let html = '';

  filteredCommands.forEach(category => {
    if (category.commands.length > 0) {
      html += `
                <div class="col-span-full">
                    <h2 class="text-3xl font-bold text-gray-100 mb-6 pb-3 border-b-2 border-red-500">
                        <i class="fas fa-folder-open text-red-500 mr-3"></i>${category.category}
                    </h2>
                </div>
            `;

      category.commands.forEach(command => {
        html += createCommandCard(command);
      });
    }
  });

  if (html === '') {
    html = `
            <div class="col-span-full text-center py-12">
                <i class="fas fa-search text-6xl text-gray-700 mb-4"></i>
                <p class="text-xl text-gray-500">No se encontraron comandos</p>
            </div>
        `;
  }

  container.innerHTML = html;
}

// Search functionality
function setupSearch() {
  const searchInput = document.getElementById('searchInput');

  searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase().trim();

    if (searchTerm === '') {
      renderCommands();
      return;
    }

    const filtered = angularCommands.map(category => {
      const filteredCommands = category.commands.filter(command => {
        return command.name.toLowerCase().includes(searchTerm) ||
          command.description.toLowerCase().includes(searchTerm) ||
          command.longForm.toLowerCase().includes(searchTerm) ||
          (command.shortForm && command.shortForm.toLowerCase().includes(searchTerm));
      });

      return {
        category: category.category,
        commands: filteredCommands
      };
    }).filter(category => category.commands.length > 0);

    renderCommands(filtered);
  });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  renderCommands();
  setupSearch();
  setupSidebar();
  setupSidebarToggle();
  setupSidebarCollapse();
});

// Function to setup sidebar navigation
function setupSidebar() {
  const sidebarNav = document.getElementById('sidebarNav');
  let html = '';

  angularCommands.forEach((category, index) => {
    const categoryId = `category-${index}`;
    html += `
            <div>
              <button 
                class="category-btn w-full text-left px-4 py-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors font-semibold text-gray-200 flex items-center justify-between"
                onclick="toggleCategory('${categoryId}')"
              >
                <span>${category.category}</span>
                <i class="fas fa-chevron-down transition-transform" id="${categoryId}-icon"></i>
              </button>
              <div id="${categoryId}" class="subcategories mt-2 ml-4 space-y-1 hidden max-h-96 overflow-y-auto">
                ${category.commands.map(command => {
      const commandData = JSON.stringify({
        description: command.description,
        longForm: command.longForm,
        shortForm: command.shortForm
      }).replace(/"/g, '&quot;');

      return `
              <a 
                href="#command-${command.name.replace(/\s+/g, '-')}"
                class="block px-3 py-2 text-sm text-gray-400 hover:text-red-400 hover:bg-gray-700 rounded transition-colors"
                onclick="scrollToCommand('${command.name.replace(/\s+/g, '-')}')"
                onmouseenter="showTooltip(event, ${commandData})"
                onmouseleave="hideTooltip()"
              >
                ${command.name}
              </a>
            `;
    }).join('')}
                </div>
            </div>
        `;
  });

  sidebarNav.innerHTML = html;
}

// Function to toggle category expansion
function toggleCategory(categoryId) {
  const categoryElement = document.getElementById(categoryId);
  const iconElement = document.getElementById(`${categoryId}-icon`);

  if (categoryElement.classList.contains('hidden')) {
    categoryElement.classList.remove('hidden');
    iconElement.style.transform = 'rotate(180deg)';
  } else {
    categoryElement.classList.add('hidden');
    iconElement.style.transform = 'rotate(0deg)';
  }
}

// Function to scroll to command
function scrollToCommand(commandId) {
  const element = document.getElementById(`command-${commandId}`);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    element.classList.add('ring-2', 'ring-red-500');
    setTimeout(() => {
      element.classList.remove('ring-2', 'ring-red-500');
    }, 2000);
  }

  // Close sidebar on mobile after clicking
  if (window.innerWidth < 1024) {
    closeSidebar();
  }
}

// Function to setup sidebar toggle for mobile
function setupSidebarToggle() {
  const sidebarToggle = document.getElementById('sidebarToggle');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');

  sidebarToggle.addEventListener('click', () => {
    toggleSidebar();
  });

  overlay.addEventListener('click', () => {
    closeSidebar();
  });
}

// Function to toggle sidebar
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');

  if (sidebar.classList.contains('-translate-x-full')) {
    sidebar.classList.remove('-translate-x-full');
    overlay.classList.remove('hidden');
  } else {
    sidebar.classList.add('-translate-x-full');
    overlay.classList.add('hidden');
  }
}

// Function to close sidebar
function closeSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');

  sidebar.classList.add('-translate-x-full');
  overlay.classList.add('hidden');
}

// Function to setup sidebar collapse for desktop
function setupSidebarCollapse() {
  const collapseBtn = document.getElementById('sidebarCollapse');
  const sidebar = document.getElementById('sidebar');
  const icon = collapseBtn.querySelector('i');

  let isCollapsed = true;

  collapseBtn.addEventListener('click', () => {
    isCollapsed = !isCollapsed;

    if (isCollapsed) {
      sidebar.classList.remove('lg:translate-x-0');
      sidebar.classList.add('lg:-translate-x-full');
      icon.classList.remove('fa-chevron-left');
      icon.classList.add('fa-chevron-right');
    } else {
      sidebar.classList.remove('lg:-translate-x-full');
      sidebar.classList.add('lg:translate-x-0');
      icon.classList.remove('fa-chevron-right');
      icon.classList.add('fa-chevron-left');
    }
  });
}

// Function to show tooltip on hover
function showTooltip(event, commandData) {
  const tooltip = document.getElementById('commandTooltip');
  const tooltipDescription = document.getElementById('tooltipDescription');
  const tooltipCommand = document.getElementById('tooltipCommand');

  tooltipDescription.textContent = commandData.description;
  tooltipCommand.textContent = commandData.longForm;

  tooltip.classList.remove('hidden');

  // Position tooltip to the right of the sidebar
  const rect = event.target.getBoundingClientRect();
  tooltip.style.left = `${rect.right + 10}px`;
  tooltip.style.top = `${rect.top}px`;
}

// Function to hide tooltip
function hideTooltip() {
  const tooltip = document.getElementById('commandTooltip');
  tooltip.classList.add('hidden');
}

