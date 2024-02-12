---
title: About ticket priority
intro: Support tickets are assigned a priority based on the circumstances of the issue and impact to you and your team.
shortTitle: Ticket priority
versions:
  ghec: '*'
  ghes: '*'
topics:
  - Support
---

## About ticket priorities

When you contact {% data variables.contact.github_support %}, {% data variables.product.company_short %} will choose a priority for the ticket:

- {% data variables.product.support_ticket_priority_low %}
- {% data variables.product.support_ticket_priority_normal %}
- {% data variables.product.support_ticket_priority_high %}
- {% data variables.product.support_ticket_priority_urgent %} {% ifversion ghec %}([{% data variables.contact.premium_support %}](/support/learning-about-github-support/about-github-premium-support) only){% endif %}

{% data reusables.support.zendesk-old-tickets %}

Ticket priority helps to ensure that support requests are handled in order, and according to their circumstances and impact.

{% data reusables.support.github-can-modify-ticket-priority %}

## Ticket priorities

{% ifversion ghec %}

| Priority | Description | Examples |
| :---: | --- | --- |
| {% data variables.product.support_ticket_priority_urgent %}<br><br>([{% data variables.contact.premium_support %}](/support/learning-about-github-support/about-github-premium-support) only) | Production workflows for your organization or enterprise on {% data variables.product.prodname_ghe_cloud %} are failing due to critical service errors or outages, and the failure directly impacts the operation of your business. | <ul><li>Errors or outages on {% data variables.product.prodname_dotcom_the_website %} affect core Git or web application functionality for all members of your organization or enterprise</li></ul> |
| {% data variables.product.support_ticket_priority_high %} | Account or security issues with your organization or enterprise on {% data variables.product.prodname_ghe_cloud %} are causing limited impact to your business. | <ul><li>An organization or enterprise owner has unintentionally deleted an organization</li><li>An organization or enterprise member has uploaded sensitive data in a commit, issue, pull request, or issue attachment</li></ul> |
| {% data variables.product.support_ticket_priority_normal %} | Members of your organization or enterprise on {% data variables.product.prodname_ghe_cloud %} are experiencing limited or moderate issues with {% data variables.product.prodname_dotcom_the_website %}, or you have general concerns or questions about your organization or enterprise. | <ul><li>Questions about using APIs and features for your organization or enterprise, including rate limits</li><li>Issues with tools for organization data migration that {% data variables.product.company_short %} provides</li><li>Features related to your organization or enterprise not working as expected</li><li>General security questions about your organization or enterprise</li></ul> |
| {% data variables.product.support_ticket_priority_low %} | You have a question or suggestion about your organization or enterprise on {% data variables.product.prodname_ghe_cloud %} that is not time-sensitive, or does not otherwise block the productivity of your team. | <ul><li>Excessive resource usage for your organization or enterprise</li><li>Requests for health checks</li><li>Help with using Gists, notifications, wikis, {% data variables.product.prodname_pages %}, {% data variables.product.prodname_desktop %}, or other peripheral services or features with your organization or enterprise</li><li>Feature requests</li><li>Product feedback</li></ul> |

{% endif %}
{% ifversion ghes %}

| Priority | Description | Examples |
| :---: | --- | --- |
| {% data variables.product.support_ticket_priority_urgent %} | {% data variables.product.prodname_ghe_server %} is failing in a production environment, and the failure directly impacts the operation of your business.<br/><br/>_{% data reusables.support.priority-urgent-english-only %}_ | <ul><li>Errors or outages that affect core Git or web application functionality for all users</li><li>Severe performance degradation for majority of users</li><li>Full or rapidly filling storage</li><li>Inability to install a renewed license file</li><li>Security incident</li><li>Loss of administrative access to the instance with no known workaround</li><li>Failure to restore a backup to a production environment</li></ul> |
| {% data variables.product.support_ticket_priority_high %} | {% data variables.product.prodname_ghe_server %} is failing in a production environment, but impact on your business is limited. | <ul><li>Performance degradation that reduces productivity for many users</li><li>Reduced redundancy from failure of High Availability (HA) or cluster nodes</li><li>Failure to back up instance</li><li>Failure to restore a backup to a test or staging environment that could compromise successful restoration to a production environment</li></ul> |
| {% data variables.product.support_ticket_priority_normal %} | You're experiencing limited or moderate issues with {% data variables.product.prodname_ghe_server %}, or you have general concerns or questions about the operation of your instance. | <ul><li>Problems in a test or staging environment</li><li>Advice on using {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} APIs and features including rate limits, or questions about configuring third-party integrations from your instance</li><li>Issues with tools for user data migration that {% data variables.product.company_short %} provides</li><li>Upgrades</li><li>Bug reports</li><li>Features not working as expected</li><li>General security questions</li></ul> |
| {% data variables.product.support_ticket_priority_low %} | You have a question or suggestion about {% data variables.product.prodname_ghe_server %} that is not time-sensitive, or does not otherwise block the productivity of your team. | <ul><li>Feature requests</li><li>Product feedback</li><li>Requests for health checks (available for customers with a {% data variables.product.premium_support_plan %} only at this time)</li><li>Notifying {% data variables.product.company_short %} of planned maintenance on your instance</li></ul> |

{% endif %}

## Ticket priorities for {% data variables.product.prodname_advanced_security %}

| Priority | Description |
| :---: | --- |
| {% data variables.product.support_ticket_priority_high %} | {% data variables.product.prodname_advanced_security %} is not functioning or is stopped or severely impacted such that the end user cannot reasonably continue use of the software and no workaround is available. |
| {% data variables.product.support_ticket_priority_normal %} | {% data variables.product.prodname_advanced_security %} is functioning inconsistently, causing impaired end user usage and productivity. |
| {% data variables.product.support_ticket_priority_low %} | {% data variables.product.prodname_advanced_security %} is functioning consistently, but the end user requests minor changes in the software, such as documentation updates, cosmetic defects, or enhancements.|

## Further reading

- "[AUTOTITLE](/support/contacting-github-support/creating-a-support-ticket)"
