# Fullstack ClickUp Clone: Next.js 14, Clerk, Sentry, Radix UI, GSAP, PlanetScale, Stripe, Tailwind, MySQL, Playwright

![image](https://github.com/techmely/tickup/blob/main/public/images/Thumbnail.png)

Repo này là kết quả của [Series Build Product Fast](https://www.youtube.com/watch?v=XQzO26ak38Y&list=PLwJIrGynFq9B9_yPQjLdFj6Ziv9jRmCd5), nếu bạn không có thời gian để xem videos, hãy Star repo và clone về để dùng cho riêng bạn

## Tính năng sẽ làm

- [x] Auth
- [x] Organization/Workspaces
- [x] Xây dựng các landing pages
- [ ] Quản lý mục tiêu tổng, danh sách công việc
- [ ] Nhóm có thể chat realtime trên Ticket/Issue đang hoạt động
- [ ] Sử dụng AI để tạo tự động danh sách công việc hoặc tóm tắt cuộc hội thoại
- [ ] Thanh toán tiền + nâng cấp subscriptions
- [ ] Tracking user events với UTM

........ Sẽ cập nhật thêm

## Công nghệ triển khai
- [NextJs](https://nextjs.org) 14(App router + Server actions)
- CSS: [TailwindCss](https://tailwindcss.com)
- AI: [OpenAI](https://openai.com)
- Validation: Dùng [Valibot](https://valibot.dev/) để validate forms hoặc các đầu vào input nói chung
- Error Handler: [Sentry](https://sentry.io) capture lại các lỗi, và có ErrorBoundary tránh lỗi xảy ra ở Client
- Payment/Subscriptions: [Stripe](https://stripe.com/)
- Database: [PlanetScale](https://planetscale.com) - MySql, [Kysely](https://github.com/kysely-org/kysely) for query builder
- Deploy: [Vercel Edge](https://vercel.com/docs/edge-network/overview)
- Animation: [Gsap](https://gsap.com) hoặc [AnimateJs](https://animejs.com)
- Testing: Sử dụng Unit Test với [Vitest](https://vitest.dev) + e2e testing với [Playwright](https://playwright.dev)

## Trải nghiệm phát triển
- Sử dụng Gitflow + Semantic commit + Rabbit AI để tự review/update phần code
- Spell checker VsCode Extension để cảnh báo là gõ chữ sai
- 

## Hướng dẫn sử dụng

1. Install deps với `yarn install`
2. Đổi `.env.example` thành `.env` và thêm các secret keys vào

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=

CLERK_SECRET_KEY=
```
3. Khởi động app và tận hưởng

```bash
yarn dev
```


## License

MIT
