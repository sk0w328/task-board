# CLAUDE.md — Task Board Project

## Project Overview

This is the task board project. Update this section as the project takes shape.

## デプロイ先

GitHub リポジトリ: https://github.com/sk0w328/task-board

## Git Operations Rules

**Every code change must be committed and pushed to GitHub immediately.**

Follow this workflow after any modification:

1. Stage relevant files (never use `git add .` blindly — check for secrets or large binaries):
   ```
   git add <specific-files>
   ```

2. Commit with a clear message:
   ```
   git commit -m "concise description of what changed and why"
   ```

3. Push to the remote branch:
   ```
   git push origin <branch-name>
   ```

### Branch Strategy

- `main` — production-ready code only; never force-push
- Feature work goes on a dedicated branch: `git checkout -b feature/<name>`
- Open a pull request on GitHub to merge into `main`

### Commit Message Style

- Use the imperative mood: "Add X", "Fix Y", "Remove Z"
- One short subject line (≤ 72 chars)
- If the why is non-obvious, add a blank line followed by a brief body

### What NOT to commit

- `.env` files or any file containing secrets/credentials
- Large binary files or build artifacts (`node_modules/`, `dist/`, `__pycache__/`, etc.)
- Editor config files unless the team has agreed on them

## Code Style

- Prefer editing existing files over creating new ones
- Default to no comments — only add a comment when the **why** is non-obvious
- No half-finished implementations; complete each task before moving on
- Do not add error handling for scenarios that cannot happen

## Testing

Run the test suite before every push. If no test suite exists yet, add one as the project grows.

## 技術スタック

| カテゴリ | 採用技術 |
|----------|----------|
| UI ライブラリ | React 19 |
| ビルドツール | Vite 8 |
| スタイリング | CSS Modules（`.module.css`） |
| 状態管理 | React 組み込み `useState` / `useEffect` |
| 永続化 | `localStorage`（キー: `tasks`） |
| パッケージマネージャ | npm |

## コンポーネントの命名規約

### ファイル名
- コンポーネントファイルは **PascalCase** で命名する（例: `TaskItem.jsx`）
- 対応するスタイルファイルは同名 + `.module.css`（例: `TaskItem.module.css`）

### コンポーネント名
- エクスポートする関数名はファイル名と一致させる
- `default export` のみ使用する（named export はしない）

### ディレクトリ構成
```
src/
├── main.jsx              # エントリーポイント
├── index.css             # グローバルスタイル（リセット・body のみ）
├── App.jsx               # ルートコンポーネント
├── App.module.css
└── components/           # 再利用可能なUIコンポーネント
    ├── TaskInput.jsx
    ├── TaskInput.module.css
    ├── TaskList.jsx
    ├── TaskList.module.css
    ├── TaskItem.jsx
    └── TaskItem.module.css
```

### CSS Modules
- クラス名は **camelCase**（例: `.deleteButton`、`.completed`）
- グローバルスタイルは `index.css` のみに記述し、コンポーネント固有のスタイルは各 `.module.css` に閉じる

## Development Setup

```bash
npm install
npm run dev    # 開発サーバー起動 → http://localhost:5173
npm run build  # プロダクションビルド → dist/
```
