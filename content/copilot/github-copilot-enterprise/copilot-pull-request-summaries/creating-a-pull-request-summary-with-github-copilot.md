---
title: Creating a pull request summary with GitHub Copilot
shortTitle: Create a PR summary
intro: 'You can generate a summary in the description of a pull request, or as a comment.'
versions:
  feature: copilot-pr-summaries
topics:
  - Copilot
product: '{% data reusables.gated-features.copilot-enterprise-beta %}'
---

## About {% data variables.product.prodname_copilot_for_prs %}

You can use {% data variables.product.prodname_copilot %} to generate a summary of a pull request on {% data variables.product.prodname_dotcom_the_website %}. You can use the summary to help reviewers understand your changes, or to quickly understand the changes in a pull request you're reviewing.

{% data variables.product.prodname_copilot %} will scan through the pull request and provide an overview of the changes made in prose, as well as a bulleted list of changes with the files that they impact. You can generate a summary in the following places.

- In the description of a new pull request you're creating
- In the description of an existing pull request, by editing the opening comment
- In a comment on the main timeline of a pull request

To learn more about {% data variables.product.prodname_copilot_for_prs %} and how to use the feature most effectively, see "[AUTOTITLE](/copilot/github-copilot-enterprise/copilot-pull-request-summaries/about-copilot-pull-request-summaries)."

## Creating a summary for a pull request

1. On {% data variables.product.prodname_dotcom_the_website %}, create a pull request or navigate to an existing pull request.

   {% note %}

   **Note:** {% data variables.product.prodname_copilot %} does not take into account any existing content in the pull request description, so it is best to start with a blank description.

   {% endnote %}

1. Navigate to the text field where you want to add the pull request summary.

   - If you're creating a new pull request, use the "Add a description" field.
   - If you're adding a description to an existing pull request, edit the opening comment.
   - If you're adding a summary as a comment, navigate to the "Add a comment" section at the bottom of the pull request page.

1. In the header of the text field, select {% octicon "copilot" aria-label="Copilot actions" %}, then click **Summary**.

   ![Screenshot of the form for creating a pull request. In the header of the "Description" field, a Copilot icon is highlighted in orange, and a box appears with the "Summary" command.](/assets/images/help/copilot/copilot-description-suggestion.png)

1. Wait for {% data variables.product.prodname_copilot %} to produce the summary, then check over the results carefully.
1. Add any additional context that will help people viewing your pull request.
1. When you're happy with the description, click **Create pull request** on a new pull request, or **Update comment** if you're editing an existing description.
