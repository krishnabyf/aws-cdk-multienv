# AWS CDK Multi-Environment Platform

TypeScript AWS CDK reference architecture for deploying isolated development and production
stacks through one reusable infrastructure codebase.

## What It Demonstrates

- Environment-aware AWS CDK stacks
- Lambda, VPC, and S3 infrastructure composition
- Reusable constructs and configuration boundaries
- CloudFormation synthesis without committing generated assets
- Node.js 24 CI for build, tests, and `cdk synth`

## Validate

```bash
npm ci
npm run build
npm test -- --runInBand
npx cdk synth
```

## Deploy

Authenticate to an AWS sandbox account and use the CDK context/configuration defined by the
application:

```bash
npx cdk diff
npx cdk deploy
```

Do not commit AWS credentials, generated `cdk.out` assets, deployment packages, or account
secrets.

## Portfolio Status

This repository is an infrastructure reference sample. It should be reviewed and adapted for
an organisation's networking, IAM, encryption, logging, tagging, and cost-control standards
before production deployment.

## License

MIT
