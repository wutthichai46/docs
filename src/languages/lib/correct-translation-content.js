/**
 * A lot of translations have minor corruptions that will lead to rendering
 * failing (and having to rely on English fallback). Many of these are
 * easy to manually correct for.
 *
 * This function is a temporary solution to correct for these corruptions.
 * It looks for easy "low hanging fruit" that we can correct for.
 *
 */
export function correctTranslatedContentStrings(content, englishContent, context = {}) {
  // A lot of translations have corruptions around the AUTOTITLE links.
  // We've requested that these are corrected back but as a temporary
  // solution we'll manually recover now.
  // See internal issue #2762
  // In late 2023, search in the translations repos if these things are
  // still happening and if not, the following lines can be removed.
  content = content.replaceAll('[AUTOTITLE"을 참조하세요]', '[AUTOTITLE]')
  content = content.replaceAll('[AUTOTITLE"을]', '[AUTOTITLE]')
  content = content.replaceAll('["AUTOTITLE]', '"[AUTOTITLE]')
  content = content.replaceAll('[AUTOTITLE"을 참조하세요.](', '[AUTOTITLE](')
  content = content.replaceAll('[ AUTOTITLE](', '[AUTOTITLE](')
  content = content.replaceAll('[ "AUTOTITLE](', '[AUTOTITLE](')

  if (context.code === 'ru') {
    // We've seen a lot of these in the Russian translations:
    content = content.replaceAll('{% данных variables', '{% data variables')
    content = content.replaceAll('{% variables.', '{% data variables.')

    // For the rather custom Russian translation of
    // the content/get-started/quickstart/github-glossary.md page
    // These string replacements speak for themselves.
    content = content.replaceAll(
      '{% для глоссария в глоссариях %}',
      '{% for glossary in glossaries %}',
    )
    content = content.replaceAll('{{ глоссарий.term }}', '{{ glossary.term }}')
    content = content.replaceAll('{{ глоссарий.description }}', '{{ glossary.description }}')
  }

  if (context.code === 'ko') {
    // For the rather custom Korean translation of github-glossary.md
    // Let's try to salvage based on what's in
    // docs-internal.ko-kr/content/get-started/quickstart/github-glossary.md
    // as of September 2023.
    content = content.replaceAll('용어집 %}의 용어집에 대한 {%', '{% for glossary in glossaries %}')
    content = content.replaceAll('{{ 용어집.term }}', '{{ glossary.term }}')
    content = content.replaceAll('{{ 용어집.description }}', '{{ glossary.description }}')
  }

  // We have seen a lot of Markdown tables, that may have Liquid tags
  // (like `{% ifversion ... %}`) within them lose the linebreak between
  // the heading and the first row marker.
  // For example:
  //
  //    | **Sprache** | **Ökosystem** | **Manifestdatei** | **Unterstützter Abhängigkeitsbereich** | |:---|:---:|:---:|:---|{% ifversion dep
  //
  // The equivalent English for that is:
  //
  //    | **Language** | **Ecosystem** | **Manifest file** | **Dependency scope supported** |
  //    |:---|:---:|:---:|:---|
  //    {%- ifversion dependency-graph-dart-support %}
  //
  // Let's inject these newline characters if found in the English content.
  if (content.includes('| |:---|:') && englishContent.includes('|\n|:---|')) {
    content = content.replaceAll('| |:---|:', '|\n|:---|:')
  }
  if (content.includes('|:---|{% ifversion') && englishContent.includes('|:---|\n{%- ifversion')) {
    content = content.replaceAll('|:---|{% ifversion', '|:---|\n{%- ifversion')
  }

  if (context.dottedPath === 'reusables.copilot.differences-cfi-cfb-table') {
    // As of Dec 2023, the French translation has a subtle typo.
    // This string replace is highly specific and clearly only going to
    // work if the exact French, incorrect, translation is still in use.
    // Consider deleting these lines in mid-2024 because hopefully by then
    // the translation mistake, which we've reported, will be corrected.
    content = content.replace(
      '{% data variables.copilot.cfi_price_per_month %} par utilisateur et par mois',
      '{% data variables.copilot.cfb_price_per_month %} par utilisateur et par mois.',
    )
  }

  // A lot of Liquid tags lose their linebreak after the `}`
  // result in formatting problems, especially around Markdown tables.
  // This code here, compares each Liquid statement, in the translation,
  // and tests if it appears like that but with a newline in the English.
  // English example:
  //
  //    {%- ifversion ghes %}
  //    | Thing | ✔️ |
  //    {%- endif %}
  //
  // Translation example:
  //
  //    {%- ifversion ghes %} | Thing | ✔️ | {%- endif %}
  //
  // There exists the risk that different Liquid statements gets compared
  // different Liquid statements in the English, but the risk is worth
  // taking because even if this accidentally introduces a newline, it's
  // unlikely to cause a problem. At worst that a sentence displays on its
  // own paragraph.
  content = content.replace(/\{%(.+?)%\} /g, (match) => {
    if (match.lastIndexOf('{%') > 0) {
      // For example:
      //
      //    `{% bla bla %}, and {% foo bar %} `
      //
      // Our regex is not greedy, but technically, if you look closely
      // you'll see this is the first match that starts with `{%` and
      // ends with `%} `. Let's skip these.
      return match
    }

    const withLinebreak = match.slice(0, -1) + '\n'
    if (englishContent.includes(withLinebreak) && !englishContent.includes(match)) {
      return withLinebreak
    }
    return match
  })
  // The above corrections deepend on looking for `{% foo %} ` and replacing
  // it with `{% foo %}\n`. ...if `{% foo %}\n` was in the English
  // content and `{% foo %} ` was *not*.
  // However we see a lot of cases of this:
  //
  //    ... {% endif %} | First Column ...
  //
  // Which needs to become this:
  //
  //    ... {% endif %}
  //    | First Column ...
  //
  // And since `{% endif %}` is such a common Liquid tag we can't reply
  // on looking for it with `{% endif %}\n` in the English content.
  content = content.replace(/\{% endif %\} \| /g, (match) => {
    const potentiallyBetter = '{% endif %}\n| '
    if (englishContent.includes(potentiallyBetter)) {
      return potentiallyBetter
    }
    return match
  })

  // All too often we see translations that look like this:
  //
  //   | Qualifizierer | Beschreibung | | -------- | -------- | {% ifversion ghec or ghes > 3.8 %} | `advanced-security:enabled` | Zeigt Repositorys an, für die {% data variables.product.prodname_GH_advanced_security %} aktiviert wurde | {% endif %} | `code-scanning-pull-request-alerts:enabled`| Zeigt Repositorys an, für die die {% data variables.product.prodname_code_scanning %} zur Ausführung bei Pull Requests konfiguriert wurde | | `dependabot-security-updates:enabled` | Zeigt Repositorys an, für die {% data variables.product.prodname_dependabot %}-Sicherheitsupdates aktiviert wurden  | | `secret-scanning-push-protection:enabled` | Zeigt Repositorys an, für die der Pushschutz für die {% data variables.product.prodname_secret_scanning %} aktiviert wurde | {% endif %}
  //
  // Yes, that's one very long line. Notice how all the necessary linebreaks
  // are suddenly gone.
  content = content.replaceAll(' | | ', ' |\n| ')

  // This is a bit of a hack, but it works.
  // It looks for patterns like this:
  //
  //     Some words --------|-------|{
  //
  // And from that it tries to convert it to:
  //
  //     Some words
  //     --------|-------|{
  //
  // But because it's quite a broad solution specifically around any
  // Markdown table syntax, let's be extra careful and only apply it
  // to the select few pages with known problems.
  if (context.relativePath?.endsWith('scopes-for-oauth-apps.md')) {
    if (context.code === 'pt') {
      // As of Aug 2023, the Portuguese translation seems to have lost the
      // `|` characters in their Markdown table syntax.
      content = content.replace(/(\w)(\s-+\s-+\s){%/g, (whole, start, rest) => {
        return `${start}\n${rest.replace(/\s/g, '|')}`
      })
    }
    content = content.replace(/(\S\s*)(--+\|--+\|{)/, (whole, start, rest) => {
      return `${start}\n${rest}`
    })
  }

  // We *used* to mention this key within an English sentence. But that
  // whole sentence is removed (from the English) and thus we need to remove
  // same sentence from the translations as well.
  // Ideally, the translators immediately notice the change but we can't
  // guarantee that turnaround time. So we string replace it with an
  // empty string.
  // NOTE! By late 2024 all translations *should* have caught up with
  // English translation (which removed the sentence). Then we can
  // delete all of this code.
  // See internal issue docs-content#13361
  if (
    context.relativePath ===
    'authentication/managing-commit-signature-verification/about-commit-signature-verification.md'
  ) {
    const keyString = '5DE3 E050 9C47 EA3C F04A 42D3 4AEE 18F8 3AFD EB23'
    const translatedSentences = [
      // ru
      'Полный отпечаток ключа — `' + keyString + '`.',
      // ko
      `키의 전체 지문은 \`${keyString}\`입니다.`,
      // es
      `La huella digital completa de la clave es \`${keyString}\`.`,
      // zh
      `密钥的完整指纹是 \`${keyString}\`。`,
      // pt
      `A impressão digital completa da chave é \`${keyString}\`.`,
      // ja
      `キーの完全な指紋は、\`${keyString}\` です。`,
      // fr
      `L’empreinte digitale complète de la clé est \`${keyString}\`.`,
      // de
      `Der vollständige Fingerabdruck des Schlüssels ist \`${keyString}\`.`,
    ]
    for (const translatedSentence of translatedSentences) {
      if (content.includes(translatedSentence)) {
        content = content.replace(translatedSentence, '')
        break
      }
    }
    if (content.includes(keyString)) {
      // NOTE! These lines are for debugging and we can delete them once
      // we're confident the keyString is no longer present in any
      // translation.
      // for (const line of content.split('\n')) {
      //   if (line.includes(keyString)) {
      //     console.log({ [context.code]: line })
      //   }
      // }
      // throw new Error('Key string is still in there!')
      content = content.replace(keyString, '[redacted in translation]')
    }
  }
  return content
}
