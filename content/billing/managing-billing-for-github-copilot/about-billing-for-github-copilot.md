---
title: About billing for GitHub Copilot
intro: 'If you want to use {% data variables.product.prodname_copilot %}, you either need a subscription for {% data variables.product.prodname_copilot %} in your personal account, or you need to be assigned a seat by an organization {% ifversion ghec %}on {% data variables.product.prodname_ghe_cloud %}{% endif %} with a subscription for {% data variables.product.prodname_copilot_for_business %}.'
product: '{% data reusables.gated-features.copilot-billing %}'
versions:
  feature: copilot
topics:
  - Copilot
shortTitle: Billing for GitHub Copilot
---

## About billing for {% data variables.product.prodname_copilot %}

You can either set up a {% data variables.product.prodname_copilot %} subscription for your personal account, or you can set up a {% data variables.product.prodname_copilot_for_business %} subscription for your organization{% ifversion ghec %} or enterprise. If you are a member of an organization with a {% data variables.product.prodname_copilot_for_business %} subscription, you will need to be assigned a seat by an organization owner{% endif %}. {% ifversion fpt %}For more information about {% data variables.product.prodname_copilot_for_individuals %}, see "[AUTOTITLE](/copilot/overview-of-github-copilot/about-github-copilot-individual)."{% endif %} {% ifversion ghec %}For more information about {% data variables.product.prodname_copilot_for_business %}, see "[AUTOTITLE](/copilot/overview-of-github-copilot/about-github-copilot-business)."{% endif %}

{% ifversion fpt %}Before starting a paid subscription for a personal account, you can set up a one-time {% data reusables.copilot.trial-period %}-day trial to evaluate {% data variables.product.prodname_copilot %}. To begin a trial, you will need to choose a monthly or yearly billing cycle, and provide a payment method. If you do not cancel the trial before the end of the {% data reusables.copilot.trial-period %} days, the trial will automatically convert to a paid subscription. You can cancel your {% data variables.product.prodname_copilot %} trial at any time during the {% data reusables.copilot.trial-period %} days and you won't be charged. If you cancel before the end of the trial, you will continue to have access to {% data variables.product.prodname_copilot %} until the {% data reusables.copilot.trial-period %}-day trial period ends. For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-copilot/managing-your-github-copilot-subscription-for-your-personal-account)."

{% data reusables.copilot.tp-users-trial-eligibility %}{% endif %}

{% data reusables.billing.billing-info %}

## Pricing for {% data variables.product.prodname_copilot_for_individuals %}

The {% data variables.product.prodname_copilot %} subscription is available on a monthly or yearly cycle. If you choose a monthly billing cycle, you will be billed {% data variables.copilot.cfi_price_per_month %} per calendar month. If you choose a yearly billing cycle, you will be billed {% data variables.copilot.cfi_price_per_year %} per year. You can change to a monthly or yearly billing cycle at any time. The change will take effect from the start of your next billing cycle. In most cases, if you are not already being billed by {% data variables.product.prodname_dotcom %}, your billing cycle will start on the day you sign up for {% data variables.product.prodname_copilot %}. For example, if you sign up on 3 September, with monthly billing, your initial billing cycle will run from 3 September until and including 2 October, and then on the same days of subsequent months. For annual billing, if you sign up on 3 September, your initial cycle will end on 2 September the following year.

If you already have a billing cycle, billing for {% data variables.product.prodname_copilot %} will be included in your next bill, or your first bill after the end of your 30-day trial, and you will be charged on a pro rata basis for that initial period. If you do not already have an established billing date, you will be billed for {% data variables.product.prodname_copilot_for_individuals %} at the end of your 30-day trial, or when you set up a new paid {% data variables.product.prodname_copilot %} subscription.

If you have an active {% data variables.product.prodname_copilot_for_individuals %} subscription, and are then assigned a seat as part of a {% data variables.product.prodname_copilot_for_business %} subscription, your personal {% data variables.product.prodname_copilot %} subscription will be automatically canceled. You will receive a prorated refund for any remaining portion of your personal subscription's current billing cycle. You will then be able to continue using {% data variables.product.prodname_copilot %} according to the policies set at the enterprise or organization level.

A free subscription for {% data variables.product.prodname_copilot %} is available to verified students, teachers, and maintainers of popular open-source repositories on {% data variables.product.company_short %}. If you meet the criteria as an open source maintainer, you will be automatically notified when you visit the {% data variables.product.prodname_copilot %} subscription page. As a student, if you currently receive the {% data variables.product.prodname_student_pack %}, you will also be offered a free subscription when you visit the {% data variables.product.prodname_copilot %} subscription page. For more information about the {% data variables.product.prodname_student_pack %}, see "[AUTOTITLE](/free-pro-team@latest/education/explore-the-benefits-of-teaching-and-learning-with-github-education/github-global-campus-for-students/apply-to-github-global-campus-as-a-student)."

## Pricing for {% data variables.product.prodname_copilot_for_business %}

The {% data variables.product.prodname_copilot_for_business %} subscription is available on a monthly cycle, and is billed at {% data variables.copilot.cfb_price_per_month %} per user per month. Billing for {% data variables.product.prodname_copilot_for_business %} is processed at the end of each billing cycle.

Billed users are calculated based on the number of assigned {% data variables.product.prodname_copilot %} seats. Any seat assigned part way through the billing cycle will be prorated based on the number of days remaining in the cycle. Any seat assignment removed during a billing cycle will take effect from the beginning of the next cycle. The person will still be able to use {% data variables.product.prodname_copilot %} until the end of the cycle.

Seat assignment for {% data variables.product.prodname_copilot_for_business %} is managed by admins of organizations{% ifversion ghec %} which have been granted access to {% data variables.product.prodname_copilot %} at the enterprise level{% endif %}. {% ifversion ghec %}If you are a member of multiple organizations under the same enterprise, you can be assigned {% data variables.product.prodname_copilot %} seats in more than one organization, but your enterprise will only be billed once.{% endif %} For more information, see "[AUTOTITLE](/copilot/configuring-github-copilot/configuring-github-copilot-settings-in-your-organization)."

{% ifversion ghec %}
Policy settings and the usage overview for {% data variables.product.prodname_copilot %} in {% data variables.product.prodname_ghe_cloud %} are available at the enterprise level. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-copilot-in-your-enterprise)" and "[AUTOTITLE](/enterprise-cloud@latest/billing/managing-billing-for-github-copilot/viewing-your-github-copilot-usage)."
{% endif %}

When you connect an Azure subscription to your organization or enterprise account and enable metered billing via Azure, metered usage will start to be sent to Azure. You will be billed through {% data variables.product.prodname_dotcom %} for usage from the start of the current billing cycle to when you enabled metered billing via Azure, on your next billing date. The period between the date you connected your Azure subscription and enabled metered billing via Azure, and the end of the calendar month will be charged in Azure on the first of the month. For more information, see "[AUTOTITLE](/billing/managing-the-plan-for-your-github-account/connecting-an-azure-subscription)."
