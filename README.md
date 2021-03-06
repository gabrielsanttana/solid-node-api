<div align="center">
  <img src="./.github/solid.png" alt="solid-node-api" width="350" />
</div>

<p align="center">🏛️ Applying the SOLID principles on a Node.js API</p>

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/gabrielsanttana/solid-node-api/blob/master/LICENSE) 
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/gabrielsanttana/solid-node-api/blob/main/CONTRIBUTING.md)

## 🛠️ Technologies

<ul>
  <li><a href="https://nodejs.org/en/docs/">Node.js</a></li>
  <li><a href="https://www.typescriptlang.org/">TypeScript</a></li>
  <li><a href="https://github.com/expressjs/express">Express</a></li>
</ul>

## ⚙️ Requirements

<ul>
  <li><a href="https://git-scm.com/">Git</a></li>
  <li><a href="https://nodejs.org/en/">Node.js</a></li>
  <li><a href="https://www.npmjs.com/">NPM</a></li>
</ul>
</ul>

## 🚀 Installation

```bash
$ git clone https://github.com/gabrielsanttana/solid-node-api
$ cd solid-node-api
$ npm install
$ npm dev

# The API will start serving at localhost:3000 
```

## 🏛️ SOLID Principles

#### Single Responsability

A class or function should have only a single responsability, such as creating a new user.

#### Open Closed

A software module (class or function) should be open for extension but closed for modification.

#### Liskov's Substitution

Objects in a program should be replaceable with instances of their subtypes without altering the correctness of the program.

#### Interface Segregation

Clients should not be forced to depend upon the interfaces that they do not use.

#### Dependecy Inversion

Program to an interface, not to an implementation.

## 🧱 Architectural Concepts

#### Entities

Models of the domain entities.

#### Use Cases

Main application functionalities, mostly divided by endpoint.

#### Repositories

Acts as an interface between the use cases and the database operations, such as inserts, deletes, and updates.

#### Providers

Outside layer that communicates with external services, such as other APIs.

## 💁🏽 Contribute

Your contribution is always welcome!

Check out the [contribution guideline](https://github.com/gabrielsanttana/solid-node-api/blob/main/CONTRIBUTING.md).

## ⚖️ License

[MIT License](https://github.com/gabrielsanttana/solid-node-api/blob/main/LICENSE)
