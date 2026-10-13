# Fandom Tales

Static React/Vite story reader and plot map. New commits to `master` are deployed to GitHub Pages by the workflow in `.github/workflows/deploy.yml`.

## Local development

```sh
npm ci
npm run dev
```

Before publishing:

```sh
npm run lint
npm run build
```

## Adding a story

Stories are currently registered in `src/App.jsx`; adding a text file alone does not make it appear on the site.

1. Add the UTF-8 story text as a `.txt` file in `src/`, using one paragraph or dialogue turn per line.
2. Import it near the other story text imports with Vite's `?raw` suffix.
3. Create a story object with a unique `id`, `cycle`, `title`, `category`, and `paragraphs` built from the imported text.
4. Add the story object to the `storyParts` collection. For numbered chapters, add it to the corresponding story's ordered parts so the reader can navigate between chapters.
5. If the story needs to appear on the plot map, add its node and connections to the story graph configuration in `src/App.jsx`.
6. For a new cover, put the image in `public/` and reference it with `publicAsset('file-name.png')`.
7. Add an RSS `<item>` to `public/feed.xml` with the story title, page link, unique GUID, description, and actual publication date; update `<lastBuildDate>` too.
8. Run lint and build, then commit and push to `master`. GitHub Pages deploys automatically.

Korean phrases with Russian translations use `[[ko:phrase|translation]]`. The reader renders these as tappable translation controls.

## New story notifications

The site's **Подписка на RSS** link explains how to subscribe and links to the feed at `https://google4pro.github.io/fandom-tales/feed.xml`. Opening the XML in a browser only displays the feed; it does not subscribe the reader or send notifications. Copy the feed URL into an RSS reader (such as Feedly). GitHub Pages does not send email notifications to site visitors. The XML feed is styled for browsers, while RSS-reader apps continue to receive the original feed.

## GitHub Pages setup

In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**. The deploy workflow publishes the `dist/` output.
