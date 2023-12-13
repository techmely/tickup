# Fullstack ClickUp Clone: Next.js 14, Clerk, Sentry, Radix UI Tailwind, GSap, PlanetScale, Stripe, Playwright

![image](https://raw.githubusercontent.com/techmely/tickup/main/public/images/Thumbnail.png)

Repo này là kết quả của [Series Build Product Fast](https://www.youtube.com/watch?v=XQzO26ak38Y&list=PLwJIrGynFq9B9_yPQjLdFj6Ziv9jRmCd5), nếu bạn không có thời gian để xem videos, hãy Star repo và clone về để dùng cho riêng bạn

## Tính năng sẽ làm

- [x] Auth
- [x] Organization/Workspaces
- [x] Xây dựng các landing pages
- [ ] AI tự động generate ra các template công việc/hoạt động nhóm...
- [ ] Quản lý mục tiêu tổng, danh sách công việc
- [ ] Nhóm có thể chat realtime trên Ticket/Issue đang hoạt động
- [ ] Sử dụng AI để tạo tự động danh sách công việc hoặc tóm tắt cuộc hội thoại
- [ ] Thanh toán tiền + nâng cấp subscriptions
- [ ] Tracking user events với UTM

........ Sẽ cập nhật thêm khi có thời gian(hoặc mời bạn contribute)

## Công nghệ triển khai

### Architecture

**Clean Architect** + **DDD(Domain-driven Design)**

![image](https://raw.githubusercontent.com/techmely/tickup/main/public/images/CleanArchitecture.png)

Để mà nói học về Clean Architecture, chắc học không hết mất. Nhưng ở project này, ta sẽ bóc tách tất cả module phức tạp theo hướng "Separate of concerns" - chia để trị. Và nó sẽ càng thú vị hơn ta kết hợp với DDD Pattern!

Ta cũng cần phải hiểu rõ Subdomains là gì.


Team gợi ý bạn nên mua sách về đọc để hiểu sâu sắc và để nâng tầm mình lên cao hơn.

<p align="middle">
  <img width="30%" src="https://product.hstatic.net/200000211451/product/913a4121-dcd3-4635-90d6-123b981dc61e_60960d60a3494efda0a15aff5ee89a90.jpg" alt="Book" />
  <img width="30%" src="https://m.media-amazon.com/images/I/61CyKEZTdEL._SL1360_.jpg" alt="Book" />
  <img width="30%" src="https://m.media-amazon.com/images/I/81dmHMoJDjL._SY522_.jpg" alt="Book" />
</div>


### Framework/Toolings

#### Application

- Web: [NextJs](https://nextjs.org) 14(App router + Server actions)
- Desktop: [Tauri](https://tauri.app/)
- Mobile: [Flutter](https://flutter.dev/)
- Serverless Database: [PlanetScale](https://planetscale.com) - MySql, [Kysely](https://github.com/kysely-org/kysely) cho query builder

#### User Interface and User Experiences

- AI: [OpenAI](https://openai.com) + [LLMs LangChain](https://js.langchain.com/docs/get_started/introduction) để generate các templates, gợi ý danh sách công việc, tóm tắt văn bản...
- UI: CSS dùng [TailwindCss](https://tailwindcss.com) và [Radix UI](https://www.radix-ui.com/primitives/docs/overview/introduction)
- Validation: Dùng [Valibot](https://valibot.dev/) để validate forms hoặc các đầu vào input nói chung
- Error Handler: [Sentry](https://sentry.io) capture lại các lỗi, và có ErrorBoundary tránh lỗi xảy ra ở Client
- Animation: [GSap](https://gsap.com) hoặc [AnimateJs](https://animejs.com)
- Payment/Subscriptions: [Stripe](https://stripe.com/)

#### CI/CD

- Testing: Unit Test với [Vitest](https://vitest.dev) + e2e với [Playwright](https://playwright.dev) và [Cucumber Gherkin](https://cucumber.io)
- Deploy: [Vercel Edge](https://vercel.com/docs/edge-network/overview)
- Runner: [Github Actions](https://github.com/features/actions)

#### Performance

- Tools Web App:
  
    - Dùng [MillionJs](https://million.dev) để làm React nhanh hơn ~80% so với nguyên bản
    - Dùng [UnLighthouse](https://unlighthouse.dev) để auditing, đo performance metrics... ở các pages bạn muốn!
    - Dùng [Speedscope](https://github.com/jlfwong/speedscope) để trace performances profiles projects khi cần tối ưu sâu

...

## User Experience Development
- Format/Linting: [Biomejs](https://biomejs.dev) với tốc độ xử lý gần như là nhanh nhất ở thời điểm hiện tại!
- [Auto Import](https://github.com/unplugin/unplugin-auto-import): React + Next Component + Folder shared sẽ auto import. Giảm thiểu phần code import
- Áp dụng [GitFlow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) + [Semantic Commit](https://www.conventionalcommits.org/en/v1.0.0)
- [Spell Checker VsCode](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) Extension để cảnh báo là gõ chữ sai
- [CodeRabbit AI](https://coderabbit.ai) để self `review code`

## Hướng dẫn sử dụng project

### Trước lúc chạm vào code

1. Tạo tài khoản CodeRabbit AI
2. Tạo tài khoản OpenAI
3. Tạo tài khoản Github
4. Tạo tài khoản Stripe
5. Tạo tài khoản Clerk
6. Tạo tài khoản Vercel
7. Tạo tài khoản PlanetScale
8. Tạo tài khoản Sentry

### Chạm vào code

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
