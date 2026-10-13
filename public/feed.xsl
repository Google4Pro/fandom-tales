<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" encoding="UTF-8" />
  <xsl:template match="/">
    <xsl:variable name="site" select="/rss/channel/link" />
    <html lang="ru">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#100d18" />
        <title><xsl:value-of select="/rss/channel/title" /></title>
        <style>
          :root { color-scheme: dark; font-family: Inter, system-ui, sans-serif; background: #100d18; color: #f5f1ff; }
          body { box-sizing: border-box; width: min(760px, calc(100% - 32px)); margin: 48px auto; line-height: 1.65; }
          h1 { color: #f2d8a7; line-height: 1.2; }
          a { color: #d9b26f; }
          .intro, article { padding: 20px; border: 1px solid #ffffff24; border-radius: 16px; background: #ffffff08; }
          article { margin: 16px 0; }
          .button { display: inline-block; margin: 8px 8px 0 0; padding: 10px 16px; border-radius: 999px; background: #f2d8a7; color: #1b1321; font-weight: 700; text-decoration: none; }
          .hint { color: #c9c1d4; font-size: .95rem; }
        </style>
      </head>
      <body>
        <h1><xsl:value-of select="/rss/channel/title" /></h1>
        <section class="intro">
          <p><xsl:value-of select="/rss/channel/description" /></p>
          <p>Чтобы подписаться, откройте RSS-адрес в приложении для чтения лент. Открытие этой страницы в обычном браузере само по себе не включает уведомления.</p>
          <a class="button" href="{concat($site, 'rss.html')}">Как подписаться</a>
          <a class="button" href="https://feedly.com/i/subscription/feed/https://google4pro.github.io/fandom-tales/feed.xml">Добавить в Feedly</a>
          <p class="hint">Лента пока содержит объявление о запуске. Новые публикации появятся здесь после добавления автором.</p>
        </section>
        <xsl:for-each select="/rss/channel/item">
          <article>
            <h2><a href="{link}"><xsl:value-of select="title" /></a></h2>
            <p><xsl:value-of select="description" /></p>
            <p class="hint"><xsl:value-of select="pubDate" /></p>
          </article>
        </xsl:for-each>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
