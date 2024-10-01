# Architecture

## Folder structure

- Domains
- Middleware
- Modules
- Utils

### Domains

Containing all the domain specific files.

- `index.ts`
- `router.ts`
- `handler.ts`
- `service.ts`
- `data-service.ts`
- `[domainname].model.ts`

**Router**: Defining all the routes of the domain.

**Handler**

- Handle incoming and outgoing requests.
- No busines logic, just proxing requests
- Handles errors (globally)

**Service**

- handling business logic
- data validation

**Data service**

- Getting data from a resource
- No business logic here

#### Flow of the request

> incoming request <--> router <--> handler <--> service <--> data-service

### Middleware

Something about middleware.

### Modules

Something about modules.

### Utils

Something about utils.

## Authentication

Something about authentication.

## Error Handling

Something about error handling.
