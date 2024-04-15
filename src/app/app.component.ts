import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'KassUi-demo';

  routes = [
    {
      path: '/',
      label: 'Pátio',
      icon: '<i class="fa-solid fa-warehouse"></i>',
    },

    {divider:'Administração'},

    {
      id: 'admin',
      label: 'Adminstração',
      icon: '<i class="fa-solid fa-gear"></i>',
      permissions:['DEVELOP'],
      links: [
        { path: '/administracao/usuarios', label: 'Usuários', parent:"Adminstração"},
        { path: '/administracao/enderecos', label: 'Endereços', parent:"Adminstração"},
        { path: '/administracao/veiculos', label: 'Veículos', parent:"Adminstração"},
        { path: '/administracao/vagas', label: 'Vagas', parent:"Adminstração"},
        { path: '/administracao/clientes', label: 'Clientes', parent:"Adminstração"},
        { path: '/administracao/contratos', label: 'Contratos', parent:"Adminstração"},
        { path: '/administracao/unidades', label: 'Unidades', parent:"Adminstração"},
      ],
    },

    {
      path: '/agendamentos',
      label: 'Agendamentos',
      icon: '<i class="fa-solid fa-calendar-days"></i>',
    },

    {path: '/checklists', label: 'Checklists', icon: '<i class="fa-solid fa-list-check"></i>'},

    {path: '/caixa', label: 'Fluxo de caixa', icon: '<i class="fa-solid fa-cash-register"></i>'},

    {divider:'Relatórios'},
    {
      id: 'financeiros', label: 'Financeiro', icon: '<i class="fa-regular fa-newspaper"></i>',
      links:[
        {path:'/relatorios/financeiros/entradas-saidas',label: 'Entradas e Saidas?', parent:"Relatórios/Financeiro"},
        {path:'/relatorios/financeiros/consolidacao-mensal',label: 'Consolidação Mensal?', parent:"Relatórios/Financeiro"},
        {path:'/relatorios/financeiros/fechamento',label: 'Fechamento?', parent:"Relatórios/Financeiro"},
        {path:'/relatorios/financeiros/fechamento',label: 'Consulta Geral', parent:"Relatórios/Financeiro"},
      ]
    },
    {
      id: 'gerenciais', label: 'Gerenciais', icon: '<i class="fa-regular fa-newspaper"></i>',
      links:[
        {path:'/relatorios/Gerenciais/entradas-saidas',label: 'Entradas e Saidas?', parent:"Relatórios/Gerenciais"},
        {path:'/relatorios/Gerenciais/consolidacao-mensal',label: 'Consolidação Mensal?', parent:"Relatórios/Gerenciais"},
        {path:'/relatorios/Gerenciais/fechamento',label: 'Fechamento?', parent:"Relatórios/Gerenciais"},
        {path:'/relatorios/Gerenciais/fechamento',label: 'Consulta Geral', parent:"Relatórios/Gerenciais"},
      ]
    },

    {
      id: 'checklist', label: 'Checklist', icon: '<i class="fa-regular fa-newspaper"></i>',
      links:[
        {path:'/relatorios/checklist/consultas',label: 'Consulta', parent:"Checklist"},
      ]
    },
  ];

  position = 'center';

  useFav = true;

  search = true;

  usePermissions = false;

  theme = 'dark';

  header:any;

  ngOnInit(): void {

    this.header = HeaderComponent;

  }

}
