/**
 * Copyright since 2007 PrestaShop SA and Contributors
 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.md.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://devdocs.prestashop.com/ for more information.
 *
 * @author    PrestaShop SA and Contributors <contact@prestashop.com>
 * @copyright Since 2007 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 */
const discountContainer = '.discount-container';

export default {
  codeGeneratorBtn: '#cart_rule_information .js-generator-btn',
  codeInput: '#cart_rule_information_code',
  currencySelect: '#cart_rule_actions_discount_reduction_currency',
  customerItem: '#cart_rule_conditions_customer_list .entity-item',
  customerSearchContainer: '#cart_rule_conditions_customer',
  discountApplicationSelect: '#cart_rule_actions_discount_discount_application',
  discountContainer,
  giftProductSearchContainer: '#cart_rule_actions_gift_product',
  excludeDiscountedProductsContainer: '.exclude-discounted-products',
  highlightSwitchContainer: '.js-highlight-switch-container',
  includeTaxInput: '#cart_rule_actions_discount_reduction_include_tax',
  reductionTypeSelect: '#cart_rule_actions_discount_reduction_type',
  // eslint-disable-next-line max-len
  reductionValueSymbol: `${discountContainer} .price-reduction-value .input-group .input-group-append .input-group-text, .price-reduction-value .input-group .input-group-prepend .input-group-text`,
  specificProductSearchComponent: '#cart_rule_actions_discount_specific_product',
  specificProductSearchContainer: '.specific-product-search-container',
};
