# Build stage
FROM node:22-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# Production stage
FROM node:22-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOST=0.0.0.0

RUN addgroup --system --gid 1001 nodejs \
  && adduser --system --uid 1001 tanstack

COPY --from=builder /app/.output ./.output
COPY --from=builder /app/package.json ./package.json

USER tanstack

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]
