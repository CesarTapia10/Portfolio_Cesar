
export class Tag {
    static readonly ANGULAR = new Tag('Angular', '#802200');
    static readonly SPRINGBOOT = new Tag('Spring Boot', '#769D37');
    static readonly SPRINGSECURITY = new Tag('Spring Security', '#379D4A');
    static readonly SPRINGJWT = new Tag('Spring JWT', '#379D4A');
    static readonly SPRINGWEB = new Tag('Spring Web', '#2D8058');
    static readonly JPA = new Tag('JPA', '#689F15');
    static readonly POSTGRESQL = new Tag('PostgreSQL', '#207F7F')
    static readonly RESTAPI = new Tag('Rest API', '#507F3F');
    static readonly POSTMAN = new Tag('Postman', '#7F5400');
    static readonly TYPESCRIPT = new Tag('Typescript', '#006580');
    static readonly HTML = new Tag('HTML', '#C26F00');
    static readonly CSS = new Tag('CSS', '#0071C2');
    static readonly FASTAPI = new Tag('FastAPI', '#009E10');
    static readonly JAVA = new Tag('Java', '#665C0D');

    private constructor(private readonly key: string, public readonly color: string) {
    }

    toString() {
        return this.key;
    }

}