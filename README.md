# now-v2-nodejs-typescript
A very simple example of ZEIT now web application written in TypeScript.

## now

> ZEIT [now](https://zeit.co/now) makes serverless application deployment easy.

After installing the now CLI, type `now` in this directory.

```sh
$ now
> Deploying ~\Documents\Source\now-v2-nodejs-typescript under arch
> Synced 1 file (318B) [1s]
> https://hello-now-ts-h0zgsrpks.now.sh [v2] [1s]
┌ src/index.ts        Ready               [20s]
└── λ src/index.ts (3.7KB) [sfo1]
> Success! Deployment ready [24s]
```

## code

- `tsconfig.json`: compiles `src/*.ts` and save results in `dist/`
- `now.json`: uses `@now/node-server@canary` for the latest [`ncc`](https://github.com/zeit/ncc)
- `src/index.ts`: a web server that returns a simple JSON response to any request

---
https://github.com/arcatdmz/now-v2-nodejs-typescript
