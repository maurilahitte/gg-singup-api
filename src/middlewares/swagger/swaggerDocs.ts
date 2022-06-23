import swaggerJSDoc from 'swagger-jsdoc';
/*
    IMPORTANT:
    When the documentation for a new api is defined. Modify the description and name of the api.
    * Example: in 'src/components/health/health.api.ts'
    * To view the documentation for the tool: https://www.npmjs.com/package/swagger-jsdoc
*/

const swaggerOptions: swaggerJSDoc.Options = {
    swaggerDefinition: {
        openApi: '3.0.0',
        info: {
            title: 'GoGrow SingUp API',
            description: 'GoGrow SingUp API Documentation',
            version: '1.0',
        },
        /*servers: [   //Delete comments and configure according to the publication url
            {
                url: '{KARVI_API_TEMPLATE}',
                variables: {
                    KARVI_API_TEMPLATE: {
                        enum: [
                            'https://karvi-template-api.development.karvi.com.ar',
                            'https://karvi-template-api.staging.karvi.com.ar',
                        ],
                    },
                },
            },
        ],*/
    },
    apis: ['./src/components/**/*.ts', './src/middlewares/**/*.ts', './src/index.ts'],
};

export default swaggerJSDoc(swaggerOptions);
