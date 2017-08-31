import watermark from './components/index.js'

const components = [
    watermark
]

const install = function(Vue){
    if (install.installed) return;
  
    components.map(component => {
      Vue.component(component.name, component);
    });
}

install(window.Vue);
console.log(window.Vue);
