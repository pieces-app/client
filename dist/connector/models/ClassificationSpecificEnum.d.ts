/**
 * This is an open API that holds specific endpoints as a base for Pieces Context Systems
 * The point of this API is to allow us to organize and Auto Generate Code Specific for Connected Applications - this will allow for stateful context abstraction & less code within the Core Connector
 *
 * The version of the OpenAPI document: 1.0
 * Contact: tsavo@pieces.app
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 *
 * @export
 * @enum {string}
 */
export declare enum ClassificationSpecificEnum {
    Csx = "csx",
    Cs = "cs",
    Html = "html",
    Htm = "htm",
    Shtml = "shtml",
    Xhtml = "xhtml",
    Hs = "hs",
    HsBoot = "hs-boot",
    Hsig = "hsig",
    Cpp = "cpp",
    Cc = "cc",
    Cp = "cp",
    Cxx = "cxx",
    C = "c",
    H = "h",
    Hh = "hh",
    Hpp = "hpp",
    Hxx = "hxx",
    Inl = "inl",
    Ipp = "ipp",
    Ixx = "ixx",
    Cppm = "cppm",
    Csv = "csv",
    Doc = "doc",
    Docm = "docm",
    Docx = "docx",
    Exe = "exe",
    Gif = "gif",
    Ico = "ico",
    Jpe = "jpe",
    Jpeg = "jpeg",
    Jpg = "jpg",
    Jpgm = "jpgm",
    Jpgv = "jpgv",
    Log = "log",
    Mp2 = "mp2",
    Mp2a = "mp2a",
    Mp3 = "mp3",
    Mp4 = "mp4",
    Mp4a = "mp4a",
    Oga = "oga",
    Ogg = "ogg",
    Ogv = "ogv",
    Ogx = "ogx",
    Ppt = "ppt",
    Pptx = "pptx",
    Pptm = "pptm",
    Qt = "qt",
    Text = "text",
    Tif = "tif",
    Tiff = "tiff",
    Txt = "txt",
    Wav = "wav",
    Weba = "weba",
    Webm = "webm",
    Webp = "webp",
    Xla = "xla",
    Xlam = "xlam",
    Xlc = "xlc",
    Xlm = "xlm",
    Xls = "xls",
    Xlsb = "xlsb",
    Xlsm = "xlsm",
    Xlsx = "xlsx",
    Xlt = "xlt",
    Xltm = "xltm",
    Xltx = "xltx",
    Pdf = "pdf",
    Png = "png",
    Rpm = "rpm",
    Zip = "zip",
    Woff = "woff",
    Woff2 = "woff2",
    Svgz = "svgz",
    Bin = "bin",
    Bmp = "bmp",
    Eot = "eot",
    Gz = "gz",
    Jar = "jar",
    Mpkg = "mpkg",
    Ai = "ai",
    Eps = "eps",
    Dmg = "dmg",
    List = "list",
    Rtx = "rtx",
    Uri = "uri",
    Uris = "uris",
    Urls = "urls",
    Css = "css",
    Dart = "dart",
    Java = "java",
    Bsh = "bsh",
    Js = "js",
    Jsx = "jsx",
    Mjs = "mjs",
    Htc = "htc",
    Json = "json",
    Ipynb = "ipynb",
    Gltf = "gltf",
    Jsonml = "jsonml",
    Ps = "ps",
    Ssml = "ssml",
    Wasm = "wasm",
    Rtf = "rtf",
    Cco = "cco",
    Pl = "pl",
    Pc = "pc",
    Pm = "pm",
    Pmc = "pmc",
    Pod = "pod",
    T = "t",
    Xml = "xml",
    Tld = "tld",
    Dtml = "dtml",
    Rng = "rng",
    Rss = "rss",
    Opml = "opml",
    Svg = "svg",
    Xaml = "xaml",
    SublimeSnippet = "sublime-snippet",
    TmLanguage = "tmLanguage",
    TmPreferences = "tmPreferences",
    TmSnippet = "tmSnippet",
    TmTheme = "tmTheme",
    Csproj = "csproj",
    Fsproj = "fsproj",
    Sqlproj = "sqlproj",
    Vbproj = "vbproj",
    Vcproj = "vcproj",
    Vcxproj = "vcxproj",
    Dae = "dae",
    Props = "props",
    Targets = "targets",
    Xsd = "xsd",
    Xsl = "xsl",
    Xslt = "xslt",
    Ecma = "ecma",
    Node = "node",
    Php = "php",
    Php3 = "php3",
    Php4 = "php4",
    Php5 = "php5",
    Php7 = "php7",
    Php8 = "php8",
    Phps = "phps",
    Phpt = "phpt",
    Phtml = "phtml",
    Py = "py",
    Py3 = "py3",
    Pyw = "pyw",
    Pyi = "pyi",
    Pyx = "pyx",
    PyxIn = "pyx.in",
    Pxd = "pxd",
    PxdIn = "pxd.in",
    Pxi = "pxi",
    PxiIn = "pxi.in",
    Rpy = "rpy",
    Cpy = "cpy",
    Gyp = "gyp",
    Gypi = "gypi",
    Vpy = "vpy",
    Smk = "smk",
    Wscript = "wscript",
    Bazel = "bazel",
    Bzl = "bzl",
    Pyc = "pyc",
    Class = "class",
    P = "p",
    Pas = "pas",
    Curl = "curl",
    Mcurl = "mcurl",
    Go = "go",
    Swift = "swift",
    Rs = "rs",
    Ts = "ts",
    Tsx = "tsx",
    Rb = "rb",
    Rbi = "rbi",
    Rbx = "rbx",
    Rjs = "rjs",
    Rabl = "rabl",
    Rake = "rake",
    Capfile = "capfile",
    Jbuilder = "jbuilder",
    Gemspec = "gemspec",
    Podspec = "podspec",
    Irbrc = "irbrc",
    Pryrc = "pryrc",
    Prawn = "prawn",
    Thor = "thor",
    Appfile = "Appfile",
    Appraisals = "Appraisals",
    Berksfile = "Berksfile",
    Brewfile = "Brewfile",
    Cheffile = "Cheffile",
    Deliverfile = "Deliverfile",
    Fastfile = "Fastfile",
    Gemfile = "Gemfile",
    Guardfile = "Guardfile",
    Podfile = "Podfile",
    Rakefile = "Rakefile",
    Rantfile = "Rantfile",
    Scanfile = "Scanfile",
    Simplecov = "simplecov",
    Snapfile = "Snapfile",
    Thorfile = "Thorfile",
    Vagrantfile = "Vagrantfile",
    Scala = "scala",
    Sbt = "sbt",
    Sc = "sc",
    Cmd = "cmd",
    Bat = "bat",
    Coffee = "coffee",
    Erl = "erl",
    Hrl = "hrl",
    Escript = "escript",
    Lua = "lua",
    Md = "md",
    Mdown = "mdown",
    Mdwn = "mdwn",
    Markdown = "markdown",
    Markdn = "markdn",
    Matlab = "matlab",
    M = "m",
    Ps1 = "ps1",
    Sh = "sh",
    Bash = "bash",
    Bashrc = "bashrc",
    Ash = "ash",
    Zsh = "zsh",
    BashAliases = ".bash_aliases",
    BashCompletions = ".bash_completions",
    BashFunctions = ".bash_functions",
    BashLogin = ".bash_login",
    BashLogout = ".bash_logout",
    BashProfile = ".bash_profile",
    BashVariables = ".bash_variables",
    Profile = ".profile",
    TextmateInit = ".textmate_init",
    Zlogin = ".zlogin",
    Zlogout = ".zlogout",
    Zprofile = ".zprofile",
    Zshenv = ".zshenv",
    Zshrc = ".zshrc",
    Pkgbuild = "PKGBUILD",
    Ebuild = "ebuild",
    Eclass = "eclass",
    R = "r",
    Sql = "sql",
    Ddl = "ddl",
    Dml = "dml",
    Tex = "tex",
    Ltx = "ltx",
    Sty = "sty",
    Cls = "cls",
    Unknown = "UNKNOWN",
    Yaml = "yaml",
    Yml = "yml",
    Toml = "toml",
    Tml = "tml",
    CargoLock = "Cargo.lock",
    GopkgLock = "Gopkg.lock",
    Pipfile = "Pipfile",
    PoetryLock = "poetry.lock",
    UniformResourceLocator = "uniform_resource_locator",
    CustomUrlScheme = "custom_url_scheme",
    UnixFilePath = "unix_file_path",
    WindowsFilePath = "windows_file_path",
    UniformResourceIdentifier = "uniform_resource_identifier",
    Hljs1c = "hljs-1c",
    HljsAbnf = "hljs-abnf",
    HljsAccesslog = "hljs-accesslog",
    HljsActionscript = "hljs-actionscript",
    HljsAda = "hljs-ada",
    HljsAngelscript = "hljs-angelscript",
    HljsApache = "hljs-apache",
    HljsApplescript = "hljs-applescript",
    HljsArcade = "hljs-arcade",
    HljsArduino = "hljs-arduino",
    HljsArmasm = "hljs-armasm",
    HljsAsciidoc = "hljs-asciidoc",
    HljsAspectj = "hljs-aspectj",
    HljsAutohotkey = "hljs-autohotkey",
    HljsAutoit = "hljs-autoit",
    HljsAvrasm = "hljs-avrasm",
    HljsAwk = "hljs-awk",
    HljsAxapta = "hljs-axapta",
    HljsBash = "hljs-bash",
    HljsBasic = "hljs-basic",
    HljsBnf = "hljs-bnf",
    HljsBrainfuck = "hljs-brainfuck",
    HljsCal = "hljs-cal",
    HljsCapnproto = "hljs-capnproto",
    HljsCeylon = "hljs-ceylon",
    HljsClean = "hljs-clean",
    HljsClojureRepl = "hljs-clojure-repl",
    HljsClojure = "hljs-clojure",
    HljsCmake = "hljs-cmake",
    HljsCoffeescript = "hljs-coffeescript",
    HljsCoq = "hljs-coq",
    HljsCos = "hljs-cos",
    HljsCpp = "hljs-cpp",
    HljsCrmsh = "hljs-crmsh",
    HljsCrystal = "hljs-crystal",
    HljsC = "hljs-c",
    HljsCs = "hljs-cs",
    HljsCsp = "hljs-csp",
    HljsCss = "hljs-css",
    HljsD = "hljs-d",
    HljsDart = "hljs-dart",
    HljsDelphi = "hljs-delphi",
    HljsDiff = "hljs-diff",
    HljsDjango = "hljs-django",
    HljsDns = "hljs-dns",
    HljsDockerfile = "hljs-dockerfile",
    HljsDos = "hljs-dos",
    HljsDsconfig = "hljs-dsconfig",
    HljsDts = "hljs-dts",
    HljsDust = "hljs-dust",
    HljsEbnf = "hljs-ebnf",
    HljsElixir = "hljs-elixir",
    HljsElm = "hljs-elm",
    HljsErb = "hljs-erb",
    HljsErlangRepl = "hljs-erlang-repl",
    HljsErlang = "hljs-erlang",
    HljsExcel = "hljs-excel",
    HljsFix = "hljs-fix",
    HljsFlix = "hljs-flix",
    HljsFortran = "hljs-fortran",
    HljsFsharp = "hljs-fsharp",
    HljsGams = "hljs-gams",
    HljsGauss = "hljs-gauss",
    HljsGcode = "hljs-gcode",
    HljsGherkin = "hljs-gherkin",
    HljsGlsl = "hljs-glsl",
    HljsGml = "hljs-gml",
    HljsGo = "hljs-go",
    HljsGolo = "hljs-golo",
    HljsGradle = "hljs-gradle",
    HljsGroovy = "hljs-groovy",
    HljsHaml = "hljs-haml",
    HljsHandlebars = "hljs-handlebars",
    HljsHaskell = "hljs-haskell",
    HljsHaxe = "hljs-haxe",
    HljsHsp = "hljs-hsp",
    HljsHtmlbars = "hljs-htmlbars",
    HljsHttp = "hljs-http",
    HljsHy = "hljs-hy",
    HljsInform7 = "hljs-inform7",
    HljsIni = "hljs-ini",
    HljsIrpf90 = "hljs-irpf90",
    HljsIsbl = "hljs-isbl",
    HljsJava = "hljs-java",
    HljsJavascript = "hljs-javascript",
    HljsJbossCli = "hljs-jboss-cli",
    HljsJson = "hljs-json",
    HljsJuliaRepl = "hljs-julia-repl",
    HljsJulia = "hljs-julia",
    HljsKotlin = "hljs-kotlin",
    HljsLasso = "hljs-lasso",
    HljsLdif = "hljs-ldif",
    HljsLeaf = "hljs-leaf",
    HljsLess = "hljs-less",
    HljsLisp = "hljs-lisp",
    HljsLivecodeserver = "hljs-livecodeserver",
    HljsLivescript = "hljs-livescript",
    HljsLlvm = "hljs-llvm",
    HljsLsl = "hljs-lsl",
    HljsLua = "hljs-lua",
    HljsMakefile = "hljs-makefile",
    HljsMarkdown = "hljs-markdown",
    HljsMathematica = "hljs-mathematica",
    HljsMatlab = "hljs-matlab",
    HljsMaxima = "hljs-maxima",
    HljsMel = "hljs-mel",
    HljsMercury = "hljs-mercury",
    HljsMipsasm = "hljs-mipsasm",
    HljsMizar = "hljs-mizar",
    HljsMojolicious = "hljs-mojolicious",
    HljsMonkey = "hljs-monkey",
    HljsMoonscript = "hljs-moonscript",
    HljsN1ql = "hljs-n1ql",
    HljsNginx = "hljs-nginx",
    HljsNimrod = "hljs-nimrod",
    HljsNix = "hljs-nix",
    HljsNsis = "hljs-nsis",
    HljsObjectivec = "hljs-objectivec",
    HljsOcaml = "hljs-ocaml",
    HljsOpenscad = "hljs-openscad",
    HljsOxygene = "hljs-oxygene",
    HljsParser3 = "hljs-parser3",
    HljsPerl = "hljs-perl",
    HljsPf = "hljs-pf",
    HljsPgsql = "hljs-pgsql",
    HljsPhp = "hljs-php",
    HljsPlaintext = "hljs-plaintext",
    HljsPony = "hljs-pony",
    HljsPowershell = "hljs-powershell",
    HljsProcessing = "hljs-processing",
    HljsProfile = "hljs-profile",
    HljsProlog = "hljs-prolog",
    HljsProperties = "hljs-properties",
    HljsProtobuf = "hljs-protobuf",
    HljsPuppet = "hljs-puppet",
    HljsPurebasic = "hljs-purebasic",
    HljsPython = "hljs-python",
    HljsQ = "hljs-q",
    HljsQml = "hljs-qml",
    HljsR = "hljs-r",
    HljsReasonml = "hljs-reasonml",
    HljsRib = "hljs-rib",
    HljsRoboconf = "hljs-roboconf",
    HljsRouteros = "hljs-routeros",
    HljsRsl = "hljs-rsl",
    HljsRuby = "hljs-ruby",
    HljsRuleslanguage = "hljs-ruleslanguage",
    HljsRust = "hljs-rust",
    HljsSas = "hljs-sas",
    HljsScala = "hljs-scala",
    HljsScheme = "hljs-scheme",
    HljsScilab = "hljs-scilab",
    HljsScss = "hljs-scss",
    HljsShell = "hljs-shell",
    HljsSmali = "hljs-smali",
    HljsSmalltalk = "hljs-smalltalk",
    HljsSml = "hljs-sml",
    HljsSqf = "hljs-sqf",
    HljsSql = "hljs-sql",
    HljsStan = "hljs-stan",
    HljsStata = "hljs-stata",
    HljsStep21 = "hljs-step21",
    HljsStylus = "hljs-stylus",
    HljsSubunit = "hljs-subunit",
    HljsSwift = "hljs-swift",
    HljsTaggerscript = "hljs-taggerscript",
    HljsTap = "hljs-tap",
    HljsTcl = "hljs-tcl",
    HljsTex = "hljs-tex",
    HljsThrift = "hljs-thrift",
    HljsTp = "hljs-tp",
    HljsTwig = "hljs-twig",
    HljsTypescript = "hljs-typescript",
    HljsVala = "hljs-vala",
    HljsVbnet = "hljs-vbnet",
    HljsVbscriptHtml = "hljs-vbscript-html",
    HljsVbscript = "hljs-vbscript",
    HljsVerilog = "hljs-verilog",
    HljsVhdl = "hljs-vhdl",
    HljsVim = "hljs-vim",
    HljsX86asm = "hljs-x86asm",
    HljsXl = "hljs-xl",
    HljsXml = "hljs-xml",
    HljsXquery = "hljs-xquery",
    HljsYaml = "hljs-yaml",
    HljsToml = "hljs-toml",
    HljsZephir = "hljs-zephir",
    HljsHtml = "hljs-html",
    Groovy = "groovy",
    Kt = "kt",
    El = "el",
    Clj = "clj",
    Ex = "ex",
    Adb = "adb",
    Ads = "ads",
    Agda = "agda",
    Elm = "elm",
    Exs = "exs",
    Glsl = "glsl",
    Ml = "ml",
    Lean = "lean",
    Lisp = "lisp",
    Rkt = "rkt",
    Sparql = "sparql",
    Vhdl = "vhdl",
    Zig = "zig",
    Dockerfile = "dockerfile",
    F03 = "f03",
    F08 = "f08",
    F18 = "f18",
    F90 = "f90",
    F95 = "f95",
    Jl = "jl",
    Mm = "mm",
    Scm = "scm",
    Sol = "sol",
    Sv = "sv",
    Asp = "asp",
    Cfm = "cfm"
}
export declare function ClassificationSpecificEnumFromJSON(json: any): ClassificationSpecificEnum;
export declare function ClassificationSpecificEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): ClassificationSpecificEnum;
export declare function ClassificationSpecificEnumToJSON(value?: ClassificationSpecificEnum | null): any;
