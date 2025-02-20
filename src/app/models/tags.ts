
export class Tag {
    static readonly ANGULAR = new Tag('Angular', '#5a7581');
    static readonly SPRINGBOOT = new Tag('Spring Boot', '#5a7581');
    static readonly SPRINGSECURITY = new Tag('Spring Security', '#5a7581');
    static readonly SPRINGJWT = new Tag('Spring JWT', '#5a7581');
    static readonly SPRINGWEB = new Tag('Spring Web', '#5a7581');
    static readonly JPA = new Tag('JPA', '#5a7581');
    static readonly POSTGRESQL = new Tag('PostgreSQL', '#355158')
    static readonly RESTAPI = new Tag('Rest API', '#355158');
    static readonly POSTMAN = new Tag('Postman', '#355158');
    static readonly TYPESCRIPT = new Tag('Typescript', '#192129');
    static readonly HTML5 = new Tag('HTML5', '#192129');
    static readonly CSS3 = new Tag('CSS3', '#192129');
    static readonly FASTAPI = new Tag('FastAPI', '#4a6a77');
    static readonly JAVA = new Tag('Java', '#5a7581');

    private constructor(private readonly key: string, public readonly color: string) {
    }

    toString() {
        return this.key;
    }

}