#!/usr/bin/env node

const chalk = require('chalk');
const boxen = require('boxen');

const boxenOptions = {
  padding: 1,
  margin: 1,
  borderStyle: 'round',
};

const data = {
  name: chalk.white('Sergio Costa /'),
  handle: chalk.cyan('@zergiocosta'),
  work: chalk.cyan('Software Architect'),
  linkedin: chalk.cyan('https://.linkedin.com/in/zergiocosta'),
  github: chalk.cyan('https://github.com/zergiocosta'),
  web: chalk.cyan('https://blog.sergiocosta.dev/'),
  email: chalk.cyan('sergiocostadev@gmail.com'),
  npx: chalk.white('npx zergiocosta'),
  labelWork: chalk.white.bold('      Work:'),
  labelLinkedin: chalk.white.bold('  LinkedIn:'),
  labelEmail: chalk.white.bold('     Email:'),
  labelGitHub: chalk.white.bold('    GitHub:'),
  labelWeb: chalk.white.bold('       Web:'),
  labelCard: chalk.white.bold('      Card:'),
};

const newline = '\n';
const header = `${data.name} ${data.handle}`;
const work = `${data.labelWork}  ${data.work}`;
const email = `${data.labelEmail}  ${data.email}`;
const github = `${data.labelGitHub}  ${data.github}`;
const web = `${data.labelWeb}  ${data.web}`;
const linkedin = `${data.labelLinkedin}  ${data.linkedin}`;
const card = `${data.labelCard}  ${data.npx}`;

const output =
  header +
  newline +
  newline +
  work +
  newline +
  github +
  newline +
  linkedin +
  newline +
  web +
  newline +
  email +
  newline +
  newline +
  card;

console.log(chalk.green(boxen(output, boxenOptions)));
