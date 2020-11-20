import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Box, Chip, Container, Typography } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: "#EEEEEE",
        },
        title: {
            marginBottom: "2rem",
            paddingTop: "1rem",
            fontWeight: 700,
            textAlign: "center"
        },
        sectionContainer: {
            backgroundColor: "white",
            paddingTop: "2rem",
            paddingBottom: "calc(2rem + 88px)",
        },
        sectionTitle: {
            marginBottom: "1rem",
            fontWeight: 500
        },
        section: {
            marginTop: "2rem",
            marginBottom: "1rem",
            textAlign: "center"
        },
        aboutSection: {
        },
        chip: {
            marginLeft: theme.spacing(0.2),
            marginRight: theme.spacing(0.2),
            marginBottom: theme.spacing(0.5)
        }
    }),
);

function Portfolio() {
    var classes = useStyles();

    return (
        <Box className={classes.root}>
            <Container className={classes.sectionContainer}>
                <Box component="article">
                    <Typography variant="h1" className={classes.title}>About</Typography>
                    <Box component="section" className={clsx(classes.section, classes.aboutSection)}>
                        <Typography variant="body1">Arquiteto de Soluções com ênfase em ChatBot, RPA e .NET. Graduado em Sistemas de Informações. Responsável técnico por projetos de grande impacto com mais de 15 anos de experiência. Especialista no ecossistema Microsoft deste o saudoso VB6 + ASP até o .NET Core e entusiasta do Azure. Palestrante sobre temas relacionados a Clean Code, SOLID, OOP e Design Patterns.</Typography>
                    </Box>
                </Box>
                <Box component="article">
                    <Typography variant="h1" className={classes.title}>Principais Projetos</Typography>
                    <Box component="section" className={classes.section}>
                        <Typography variant="h2" className={classes.sectionTitle}>Varejo</Typography>
                        <Typography variant="body1">Engenheiro responsável pela reescrita de aplicações legadas em micro serviços.</Typography>
                        <Chip size="medium" label=".Net Core 3.1" className={clsx(classes.chip)} />
                        <Chip size="medium" label=".Net Framework" className={clsx(classes.chip)} />
                        <Chip size="medium" label="C#" className={clsx(classes.chip)} />
                        <Chip size="medium" label="Web API" className={clsx(classes.chip)} />
                        <Chip size="medium" label="SQL Server" className={clsx(classes.chip)} />
                        <Chip size="medium" label="Dapper" className={clsx(classes.chip)} />
                        <Chip size="medium" label="DDD" className={clsx(classes.chip)} />
                        <Chip size="medium" label="TDD" className={clsx(classes.chip)} />
                        <Chip size="medium" label="Sonar" className={clsx(classes.chip)} />
                        <Chip size="medium" label="Kubernetes" className={clsx(classes.chip)} />
                        <Chip size="medium" label="AKS" className={clsx(classes.chip)} />
                        <Chip size="medium" label="Azure" className={clsx(classes.chip)} />
                        <Chip size="medium" label="Git" className={clsx(classes.chip)} />
                    </Box>
                    <Box component="section" className={classes.section}>
                        <Typography variant="h2" className={classes.sectionTitle}>Plano Odontológico</Typography>
                        <Typography variant="body1">Consultor responsável pelo desenho de novas soluções e migração do TFS para o Azure DevOps com Git.</Typography>
                        <Chip size="medium" label=".Net Core 3.1" className={clsx(classes.chip)} />
                        <Chip size="medium" label=".Net Framework" className={clsx(classes.chip)} />
                        <Chip size="medium" label="C#" className={clsx(classes.chip)} />
                        <Chip size="medium" label="Web API" className={clsx(classes.chip)} />
                        <Chip size="medium" label="SQL Server" className={clsx(classes.chip)} />
                        <Chip size="medium" label="TDD" className={clsx(classes.chip)} />
                        <Chip size="medium" label="Sonar" className={clsx(classes.chip)} />
                        <Chip size="medium" label="Kubernetes" className={clsx(classes.chip)} />
                        <Chip size="medium" label="AKS" className={clsx(classes.chip)} />
                        <Chip size="medium" label="Git" className={clsx(classes.chip)} />
                    </Box>
                    <Box component="section" className={classes.section}>
                        <Typography variant="h2" className={classes.sectionTitle}>Companhia Aérea</Typography>
                        <Typography variant="body1">Arquiteto responsável pelo desenvolvimento do chatbot para atendimento de clientes externos.</Typography>
                        <Chip size="medium" label=".Net Core 3.1" className={clsx(classes.chip)} />
                        <Chip size="medium" label="C#" className={clsx(classes.chip)} />
                        <Chip size="medium" label="Web API" className={clsx(classes.chip)} />
                        <Chip size="medium" label="Cosmos DB" className={clsx(classes.chip)} />
                        <Chip size="medium" label="Mongo" className={clsx(classes.chip)} />
                        <Chip size="medium" label="Azure" className={clsx(classes.chip)} />
                        <Chip size="medium" label="Bot Service" className={clsx(classes.chip)} />
                        <Chip size="medium" label="Bot Framework" className={clsx(classes.chip)} />
                        <Chip size="medium" label="Cognitive Services" className={clsx(classes.chip)} />
                        <Chip size="medium" label="Storage Account" className={clsx(classes.chip)} />
                    </Box>
                    <Box component="section" className={classes.section}>
                        <Typography variant="h2" className={classes.sectionTitle}>Companhia Aérea</Typography>
                        <Typography variant="body1">Arquiteto responsável pelo desenvolvimento de  RPA para automatizar atividades do back-office.</Typography>
                        <Chip size="medium" label="Blue Prism" className={clsx(classes.chip)} />
                        <Chip size="medium" label="SQL Server" className={clsx(classes.chip)} />
                        <Chip size="medium" label="C#" className={clsx(classes.chip)} />
                    </Box>
                    <Box component="section" className={classes.section}>
                        <Typography variant="h2" className={classes.sectionTitle}>Cosméticos</Typography>
                        <Typography variant="body1">Líder Técnico responsável pelo desenvolvimento do chatbot para atendimento das consultoras.</Typography>
                        <Chip size="medium" label=".Net Framework" className={clsx(classes.chip)} />
                        <Chip size="medium" label="C#" className={clsx(classes.chip)} />
                        <Chip size="medium" label="Cosmos DB" className={clsx(classes.chip)} />
                        <Chip size="medium" label="Mongo" className={clsx(classes.chip)} />
                        <Chip size="medium" label="SQL Server" className={clsx(classes.chip)} />
                        <Chip size="medium" label="Azure" className={clsx(classes.chip)} />
                        <Chip size="medium" label="Azure Functions" className={clsx(classes.chip)} />
                        <Chip size="medium" label="Bot Service" className={clsx(classes.chip)} />
                        <Chip size="medium" label="Bot Framework" className={clsx(classes.chip)} />
                        <Chip size="medium" label="Cognitive Services" className={clsx(classes.chip)} />
                        <Chip size="medium" label="Application Insight" className={clsx(classes.chip)} />
                    </Box>
                    <Box component="section" className={classes.section}>
                        <Typography variant="h2" className={classes.sectionTitle}>Telefonia</Typography>
                        <Typography variant="body1">Arquiteto responsável pelo desenvolvimento de  RPA para automatizar atividades do back-office.</Typography>
                        <Chip size="medium" label="Automation Anywhere" className={clsx(classes.chip)} />
                        <Chip size="medium" label=".Net Core" className={clsx(classes.chip)} />
                        <Chip size="medium" label="C#" className={clsx(classes.chip)} />
                        <Chip size="medium" label="Web API" className={clsx(classes.chip)} />
                        <Chip size="medium" label="SQL Server" className={clsx(classes.chip)} />
                        <Chip size="medium" label="Azure" className={clsx(classes.chip)} />
                        <Chip size="medium" label="Storage Account" className={clsx(classes.chip)} />
                        <Chip size="medium" label="VBA" className={clsx(classes.chip)} />
                    </Box>
                    <Box component="section" className={classes.section}>
                        <Typography variant="h2" className={classes.sectionTitle}>Telefonia</Typography>
                        <Typography variant="body1">Coordenador Técnico responsável por acompanhar tecnicamente mais de 40 desenvolvedores distribuídos em 8 squads distintas em projetos focados na melhoria de produtividade do back-office.</Typography>
                        <Chip size="medium" label=".Net Framework" className={clsx(classes.chip)} />
                        <Chip size="medium" label=".Net Core" className={clsx(classes.chip)} />
                        <Chip size="medium" label="C#" className={clsx(classes.chip)} />
                        <Chip size="medium" label="Web API" className={clsx(classes.chip)} />
                        <Chip size="medium" label="MVC" className={clsx(classes.chip)} />
                        <Chip size="medium" label="Cosmos DB" className={clsx(classes.chip)} />
                        <Chip size="medium" label="Mongo" className={clsx(classes.chip)} />
                        <Chip size="medium" label="SQL Server" className={clsx(classes.chip)} />
                        <Chip size="medium" label="Azure" className={clsx(classes.chip)} />
                    </Box>
                    <Box component="section" className={classes.section}>
                        <Typography variant="h2" className={classes.sectionTitle}>Energia</Typography>
                        <Typography variant="body1">Arquiteto responsável pelo desenvolvimento de  RPA para automatizar atividades do back-office.</Typography>
                        <Chip size="medium" label="Automation Anywhere" className={clsx(classes.chip)} />
                    </Box>
                    <Box component="section" className={classes.section}>
                        <Typography variant="h2" className={classes.sectionTitle}>Saúde</Typography>
                        <Typography variant="body1">Arquiteto responsável pelo desenvolvimento do serviço de autorização de exames junto as operadoras de plano de saúde.</Typography>
                        <Chip size="medium" label=".Net Framework" className={clsx(classes.chip)} />
                        <Chip size="medium" label="C#" className={clsx(classes.chip)} />
                        <Chip size="medium" label="WCF" className={clsx(classes.chip)} />
                        <Chip size="medium" label="MVC" className={clsx(classes.chip)} />
                        <Chip size="medium" label="SQL Server" className={clsx(classes.chip)} />
                        <Chip size="medium" label="ASP" className={clsx(classes.chip)} />
                    </Box>
                    <Box component="section" className={classes.section}>
                        <Typography variant="h2" className={classes.sectionTitle}>Saúde</Typography>
                        <Typography variant="body1">Arquiteto responsável pelo desenvolvimento de robôs para a consulta de elegibilidade automática em sites de operadoras de plano de saúde que não possuíam APIS expostas.</Typography>
                        <Chip size="medium" label="SQL Server" className={clsx(classes.chip)} />
                        <Chip size="medium" label="Node" className={clsx(classes.chip)} />
                        <Chip size="medium" label="TypeScript" className={clsx(classes.chip)} />
                        <Chip size="medium" label="ASP" className={clsx(classes.chip)} />
                    </Box>
                    <Box component="section" className={classes.section}>
                        <Typography variant="h2" className={classes.sectionTitle}>Saúde</Typography>
                        <Typography variant="body1">Líder técnico responsável por formar e acompanhar uma nova equipe de desenvolvimento para atuar no desenvolvimento de novas ferramentas e pequenas melhorias em ferramentas legadas.</Typography>
                        <Chip size="medium" label=".Net Framework" className={clsx(classes.chip)} />
                        <Chip size="medium" label="C#" className={clsx(classes.chip)} />
                        <Chip size="medium" label="WCF" className={clsx(classes.chip)} />
                        <Chip size="medium" label="MVC" className={clsx(classes.chip)} />
                        <Chip size="medium" label="SQL Server" className={clsx(classes.chip)} />
                        <Chip size="medium" label="ASP" className={clsx(classes.chip)} />
                        <Chip size="medium" label="VB 6" className={clsx(classes.chip)} />
                    </Box>
                    <Box component="section" className={classes.section}>
                        <Typography variant="h2" className={classes.sectionTitle}>ERP</Typography>
                        <Typography variant="body1">Líder técnico responsável ERP especializado no segmento de bases e restaurantes em funcionamento em centenas de estabelecimentos.</Typography>
                        <Chip size="medium" label=".Net Framework" className={clsx(classes.chip)} />
                        <Chip size="medium" label="C#" className={clsx(classes.chip)} />
                        <Chip size="medium" label="MVC" className={clsx(classes.chip)} />
                        <Chip size="medium" label="SQL Server" className={clsx(classes.chip)} />
                        <Chip size="medium" label="VB 6" className={clsx(classes.chip)} />
                    </Box>
                </Box>
            </Container>
        </Box >
    );
}

export default Portfolio;