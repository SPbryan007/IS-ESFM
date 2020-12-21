import VueRouter from "vue-router";
import store from "./store/index";

export const router = new VueRouter({
    mode: "history",
    linkActiveClass: "active",
    linkExactActiveClass: "active",
    base: "/",
    routes: [
        {
            path: "/",
            redirect: "/login"
        },
        {
            path: "/settings",
            components: {
                HeaderComponent: () => import("./views/HeaderComponent.vue"),
                SidebarComponent: () => import("./views/SidebarComponent.vue"),
                ContentComponent: () =>
                    import("./views/settings/SettingsView.vue")
            },
            children: [
                {
                    path: "/settings",
                    name: "settings",
                    components: {
                        ViewRouterSettings: () =>
                            import("./views/settings/MainView.vue")
                    }
                },
            ],
            meta: {
                requireAuth: true
            }
        },
        {
            path: "/dashboard",
            name: "dashboard",
            components: {
                HeaderComponent: () => import("./views/HeaderComponent.vue"),
                SidebarComponent: () => import("./views/SidebarComponent.vue"),
                ContentComponent: () => import("./views/ContentComponent.vue")
            },
            meta: {
                requireAuth: true
            }
        },
        {
            path: "/login",
            name: "login",
            components: {
                LoginRouterView: () =>
                    import("./components/auth/LoginComponent.vue"),
                SidebarComponent: () => import("./views/SidebarComponent.vue"),
            },
            meta: {
                requireAuth: false
            }
        },
        {
            path: "/usuario",
            components: {
                HeaderComponent: () => import("./views/HeaderComponent.vue"),
                SidebarComponent: () => import("./views/SidebarComponent.vue"),
                ContentComponent: () =>
                    import("./views/usuario/UsuarioView.vue")
            },
            children: [
                {
                    path: "/",
                    name: "usuario",
                    components: {
                        ViewRouterUsuario: () =>
                            import("./views/usuario/ListView.vue")
                    }
                    // linkActiveClass: "active",
                    // linkExactActiveClass: "active",
                },
                {
                    path: "agregar",
                    name: "addusuario",
                    components: {
                        ViewRouterUsuario: () =>
                            import("./views/usuario/AddView.vue")
                    }
                }
                // {
                //     path: "editar/:id",
                //     name: "editusuario",
                //     components: {
                //         ViewRouterUsuario: () =>
                //             import("./views/usuario/EditView.vue")
                //     }
                // }
            ],
            meta: {
                requireAuth: true
            }
        },
        {
            path: "/proveedor",
            components: {
                HeaderComponent: () => import("./views/HeaderComponent.vue"),
                SidebarComponent: () => import("./views/SidebarComponent.vue"),
                ContentComponent: () =>
                    import("./views/proveedor/ProveedorView.vue")
            },
            linkActiveClass: "active",
            children: [
                {
                    path: "/",
                    name: "proveedor",
                    components: {
                        ViewRouterProveedor: () =>
                            import("./views/proveedor/ListView.vue")
                    }
                    // linkActiveClass: "active",
                    // linkExactActiveClass: "active",
                },
                {
                    path: "agregar",
                    name: "addproveedor",
                    components: {
                        ViewRouterProveedor: () =>
                            import("./views/proveedor/AddView.vue")
                    }
                },
                {
                    path: "editar/:id",
                    name: "editproveedor",
                    components: {
                        ViewRouterProveedor: () =>
                            import("./views/proveedor/EditView.vue")
                    }
                }
            ],
            meta: {
                requireAuth: true
            }
        },
        {
            path: "/solicitante",
            components: {
                HeaderComponent: () => import("./views/HeaderComponent.vue"),
                SidebarComponent: () => import("./views/SidebarComponent.vue"),
                ContentComponent: () =>
                    import("./views/solicitante/SolicitanteView.vue")
            },
            linkActiveClass: "active",
            children: [
                {
                    path: "/",
                    name: "solicitante",
                    components: {
                        ViewRouterSolicitante: () =>
                            import("./views/solicitante/ListView.vue")
                    }
                    // linkActiveClass: "active",
                    // linkExactActiveClass: "active",
                },
                {
                    path: "agregar",
                    name: "addsolicitante",
                    components: {
                        ViewRouterSolicitante: () =>
                            import("./views/solicitante/AddView.vue")
                    }
                },
                {
                    path: "editar/:id",
                    name: "editsolicitante",
                    components: {
                        ViewRouterSolicitante: () =>
                            import("./views/solicitante/EditView.vue")
                    }
                }
            ],
            meta: {
                requireAuth: true
            }
        },
        {
            path: "/funcionario",
            components: {
                HeaderComponent: () => import("./views/HeaderComponent.vue"),
                SidebarComponent: () => import("./views/SidebarComponent.vue"),
                ContentComponent: () =>
                    import("./views/funcionario/FuncionarioView.vue")
            },
            linkActiveClass: "active",
            children: [
                {
                    path: "/",
                    name: "funcionario",
                    components: {
                        ViewRouterFuncionario: () =>
                            import("./views/funcionario/ListView.vue")
                    }
                    // linkActiveClass: "active",
                    // linkExactActiveClass: "active",
                },
                {
                    path: "registrar",
                    name: "addfuncionario",
                    components: {
                        ViewRouterFuncionario: () =>
                            import("./views/funcionario/AddView.vue")
                    }
                },
                {
                    path: "editar/:id",
                    name: "editfuncionario",
                    components: {
                        ViewRouterFuncionario: () =>
                            import("./views/funcionario/EditView.vue")
                    }
                }
            ],
            meta: {
                requireAuth: true
            }
        },
        {
            path: "/unidad",
            components: {
                HeaderComponent: () => import("./views/HeaderComponent.vue"),
                SidebarComponent: () => import("./views/SidebarComponent.vue"),
                ContentComponent: () => import("./views/unidad/UnidadView.vue")
            },
            linkActiveClass: "active",
            children: [
                {
                    path: "/",
                    name: "unidad",
                    components: {
                        ViewRouterUnidad: () =>
                            import("./views/unidad/ListView.vue")
                    }
                    // linkActiveClass: "active",
                    // linkExactActiveClass: "active",
                },
                {
                    path: "agregar",
                    name: "addunidad",
                    components: {
                        ViewRouterUnidad: () =>
                            import("./views/unidad/AddView.vue")
                    }
                },
                {
                    path: "editar/:id",
                    name: "editunidad",
                    components: {
                        ViewRouterUnidad: () =>
                            import("./views/unidad/EditView.vue")
                    }
                }
            ],
            meta: {
                requireAuth: true
            }
        },
        {
            path: "/item",
            components: {
                HeaderComponent: () => import("./views/HeaderComponent.vue"),
                SidebarComponent: () => import("./views/SidebarComponent.vue"),
                ContentComponent: () => import("./views/item/ItemView.vue")
            },
            linkActiveClass: "active",
            children: [
                {
                    path: "/",
                    name: "item",
                    components: {
                        ViewRouterItem: () =>
                            import("./views/item/ListView.vue")
                    }
                },
                {
                    path: "agregar",
                    name: "additem",
                    components: {
                        ViewRouterItem: () => import("./views/item/AddView.vue")
                    }
                },
                {
                    path: "editar/:id",
                    name: "edititem",
                    components: {
                        ViewRouterItem: () =>
                            import("./views/item/EditView.vue")
                    }
                }
            ],
            meta: {
                requireAuth: true
            }
        },
        {
            path: "/partida",
            components: {
                HeaderComponent: () => import("./views/HeaderComponent.vue"),
                SidebarComponent: () => import("./views/SidebarComponent.vue"),
                ContentComponent: () =>
                    import("./views/partida/PartidaView.vue")
            },
            children: [
                {
                    path: "/",
                    name: "partida",
                    components: {
                        ViewRouterPartida: () =>
                            import("./views/partida/ListView.vue")
                    }
                },
                {
                    path: "agregar",
                    name: "addpartida",
                    components: {
                        ViewRouterPartida: () =>
                            import("./views/partida/AddView.vue")
                    }
                },
                {
                    path: "editar/:id",
                    name: "editpartida",
                    components: {
                        ViewRouterPartida: () =>
                            import("./views/partida/EditView.vue")
                    }
                }
            ],
            meta: {
                requireAuth: true
            }
        },
        {
            path: "/unidad_medida",
            components: {
                HeaderComponent: () => import("./views/HeaderComponent.vue"),
                SidebarComponent: () => import("./views/SidebarComponent.vue"),
                ContentComponent: () =>
                    import("./views/unidad_medida/UnidadMedidaView.vue")
            },
            children: [
                {
                    path: "/",
                    name: "unidad_medida",
                    components: {
                        ViewRouterUnidadMedida: () =>
                            import("./views/unidad_medida/ListView.vue")
                    }
                },
                {
                    path: "agregar",
                    name: "addunidad_medida",
                    components: {
                        ViewRouterUnidadMedida: () =>
                            import("./views/unidad_medida/AddView.vue")
                    }
                },
                {
                    path: "editar/:id",
                    name: "editunidad_medida",
                    components: {
                        ViewRouterUnidadMedida: () =>
                            import("./views/unidad_medida/EditView.vue")
                    }
                }
            ],
            meta: {
                requireAuth: true
            }
        },
        {
            path: "/periodo",
            components: {
                HeaderComponent: () => import("./views/HeaderComponent.vue"),
                SidebarComponent: () => import("./views/SidebarComponent.vue"),
                ContentComponent: () =>
                    import("./views/periodo/PeriodoView.vue")
            },
            children: [
                {
                    path: "/",
                    name: "periodo",
                    components: {
                        ViewRouterPeriodo: () =>
                            import("./views/periodo/ListView.vue")
                    }
                },
                {
                    path: "agregar",
                    name: "addperiodo",
                    components: {
                        ViewRouterPeriodo: () =>
                            import("./views/periodo/AddView.vue")
                    }
                },
                {
                    path: "editar/:id",
                    name: "editperiodo",
                    components: {
                        ViewRouterPeriodo: () =>
                            import("./views/periodo/EditView.vue")
                    }
                },
                {
                    path: "inventario_inicial",
                    name: "inventario_inicial",
                    components: {
                        ViewRouterPeriodo: () =>
                            import("./views/periodo/InventarioInicialView.vue")
                    }
                },
                {
                    path: "agregar/detalles",
                    name: "adddetails",
                    components: {
                        ViewRouterPeriodo: () =>
                            import("./views/periodo/AddDetailsView.vue")
                    }
                },
                {
                    path: "agregar/detalles_ingreso",
                    name: "detalles_ingreso",
                    components: {
                        ViewRouterPeriodo: () =>
                            import("./views/periodo/StartedView.vue")
                    }
                },
                {
                    path: "agregar/detalles_ingreso/nuevo_lote/:id",
                    name: "nuevo_lote",
                    components: {
                        ViewRouterPeriodo: () =>
                            import("./views/periodo/InitialDetails.vue")
                    }
                }
            ],
            meta: {
                requireAuth: true
            }
        },
        {
            path: "/ingreso",
            components: {
                HeaderComponent: () => import("./views/HeaderComponent.vue"),
                SidebarComponent: () => import("./views/SidebarComponent.vue"),
                ContentComponent: () =>
                    import("./views/ingreso/IngresoView.vue")
            },
            children: [
                {
                    path: "/",
                    name: "ingreso",
                    components: {
                        ViewRouterIngreso: () =>
                            import("./views/ingreso/ListView.vue")
                    }
                },
                {
                    path: "agregar",
                    name: "addingreso",
                    components: {
                        ViewRouterIngreso: () =>
                            import("./views/ingreso/AddView.vue")
                    }
                },
                {
                    path: "agregar/detalles",
                    name: "addingresodetails",
                    components: {
                        ViewRouterIngreso: () =>
                            import("./views/ingreso/AddDetailsView.vue")
                    }
                },
                {
                    path: "detalle/:id",
                    name: "viewdetailingreso",
                    components: {
                        ViewRouterIngreso: () =>
                            import("./views/ingreso/ViewDetails.vue")
                    }
                }
                // {
                //     path: "editar",
                //     name: "editingreso",
                //     components: {
                //         ViewRouterIngreso: () =>
                //             import("./views/ingreso/IngresoView.vue")
                //     }
                // }
                // {
                //     path: "agregar/",
                //     name: "adddetails",
                //     components: {
                //         ViewRouterGestion: () =>
                //             import("./views/periodo/AddDetailsView.vue")
                //     }
                // },
                // {
                //     path: "agregar/detalles_ingreso",
                //     name: "detalles_ingreso",
                //     components: {
                //         ViewRouterGestion: () =>
                //             import("./views/periodo/StartedView.vue")
                //     }
                // },
                // {
                //     path: "agregar/detalles_ingreso/nuevo_lote/:id",
                //     name: "nuevo_lote",
                //     components: {
                //         ViewRouterGestion: () =>
                //             import("./views/periodo/InitialDetails.vue")
                //     }
                // }
            ],
            meta: {
                requireAuth: true
            }
        },
        {
            path: "/salida",
            components: {
                HeaderComponent: () => import("./views/HeaderComponent.vue"),
                SidebarComponent: () => import("./views/SidebarComponent.vue"),
                ContentComponent: () =>
                    import("./views/salida/SalidaView.vue")
            },
            children: [
                {
                    path: "/",
                    name: "salida",
                    components: {
                        ViewRouterSalida: () =>
                            import("./views/salida/ListView.vue")
                    }
                },
                {
                    path: "agregar",
                    name: "addsalida",
                    components: {
                        ViewRouterSalida: () =>
                            import("./views/salida/AddView.vue")
                    }
                },
                {
                    path: "agregar/detalles",
                    name: "addsalidadetails",
                    components: {
                        ViewRouterSalida: () =>
                            import("./views/salida/AddDetailsView.vue")
                    }
                },
                {
                    path: "detalle/:id",
                    name: "viewdetailsalida",
                    components: {
                        ViewRouterSalida: () =>
                            import("./views/salida/ViewDetails.vue")
                    }
                }
            ],
            meta: {
                requireAuth: true
            }
        },
        {
            path: "/reporte",
            components: {
                HeaderComponent: () => import("./views/HeaderComponent.vue"),
                SidebarComponent: () => import("./views/SidebarComponent.vue"),
                ContentComponent: () =>
                    import("./views/reporte/ReporteView.vue")
            },
            children: [
                {
                    path: "/reporte/movimiento",
                    name: "saldos",
                    components: {
                        ViewRouterReporte: () =>
                            import("./views/reporte/SaldosView.vue")
                    }
                },
                {
                    path: "/reporte/general",
                    name: "general",
                    components: {
                        ViewRouterReporte: () =>
                            import("./views/reporte/GeneralView.vue")
                    }
                },
            ],
            meta: {
                requireAuth: true
            }
        },
    ]
});

// router.beforeEach((to, from, next) => {
//     if (to.matched.some((record) => record.meta.requireAuth)) {
//         if (!store.getters["login/getUserLogged"]) {
//             next({ path: "/login" });
//         } else {
//             next();
//         }
//     } else {
//         next();
//     }
// });
// children: [
//     {
//         path: "home",
//         name: "home",
//         component: HomeComponent
//     }
// ]
