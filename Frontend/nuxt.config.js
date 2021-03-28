export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: "daeng-logistic",
        htmlAttrs: {
            lang: "en"
        },
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            { hid: "description", name: "description", content: "" }
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
        script: [
            { src: "/vendor/jquery/jquery.min.js" },
            { src: "/vendor/bootstrap/js/bootstrap.bundle.min.js" },
            { src: "/vendor/jquery-easing/jquery.easing.min.js" },
            { src: "/js/sb-admin-2.min.js" }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        "@/assets/vendor/fontawesome-free/css/all.min.css",
        "@/assets/css/sb-admin-2.min.css"
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // Doc: https://oruga.io/documentation/#nuxt
        "@oruga-ui/oruga/nuxt",
        "@nuxtjs/axios",
        "@nuxtjs/auth",
        "bootstrap-vue/nuxt"
    ],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
    auth: {
        strategies: {
            //METHOD LOGIN YANG AKAN KITA GUNAKAN
            local: {
                //DIMANA ENDPOINTNYA ADALAH
                endpoints: {
                    //UNTUK LOGIN PADA BAGIAN URL, KITA MASUKKAN URL LOGIN DARI API YANG SUDAH KITA BUAT
                    //SEDANGKAN PROPERTYNAME ADALAH PROPERTY YANG INGIN KITA AMBIL VALUENYA
                    //DALAM HAL INI, LOGIN MENGHARAPKAN TOKEN, SEDANGKAN PADA API KITA ME-RETURN TOKEN DI DALAM OBJECT DATA
                    login: { url: "/login", method: "post", propertyName: "data" },
                    logout: { url: "/logout", method: "post" },
                    user: { url: "/users/login", method: "get", propertyName: "data" }
                },
                tokenRequired: true,
                tokenType: "Bearer "
            }
        }
    },
    //SET BASE URL PROJECT API KITA, SEHINGGA SEMUA REQUEST AKAN MENGARAH KESANA
    axios: {
        baseURL: "http://dw-logistik-api.test/"
    },
    //MIDDLEWARE UNTUK MENGECEK SUDAH LOGIN ATAU BELUM, KITA SET GLOBAL
    router: {
        middleware: ["auth"]
    }
};