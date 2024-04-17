# Description
## Overview
A description is a free-form... description about the expected output of the project. No specific format is mandatory, but it's important here to be detailed. Perhaps as far as it is thought to be beneficial.

## Content
The expected output is point-of-sale app.

The app must be capable of processing transactions in the simplest way possible.

A transaction may be either selling, buying, or returning goods.

A good must have id, name, photo, barcode number, buy price, sell price.

A sale can happen in cash or credit.

The app must also record individual transactions.

Of a selling transaction the following information is to be recorded: its timestamp, snapshots of the goods being sold, and its sum total, which is to be calculated dynamically each time it is requested.

A snapshot of a good must include at least the following information: its id in the goods table and its sell price at the time.

A selling transaction reduces the stock of the goods being sold and increases income. The transaction cannot happen if the product is out of stock.

Of a buying transaction the following information is to be recorded: its timestamp, snapshots of the goods being bought, and its sum total, which is to be calculated dynamically each time it is requested.

A snapshot of a good must include at least the following information: its id in the goods table, quantity, and price for each item.

The buy price of a buying transaction may deviate from the base buy price of the good in the goods table. Two extra buttons are provided in case the base buy price needs to be updated to follow the average buy price or the latest.

A buying transaction increases the stock of the goods being bought and increases expenses.

Of a returning transaction the following information is to be recorded: its timestamp, snapshots of the goods being returned, and its sum total, which is to be calculated dynamically each time it is requested.

A snapshot of a good must include at least the following information: its id in the goods table and its return price at the time.

The return price of a returning transaction is likely to deviate from the base buy price of the good in the goods table. An input field is provided for the price.

A return transaction reduces the stock of the goods being sold and increases income. The transaction cannot happen if the product is out of stock.

The transaction can be in cash or receivables.

A transaction using receivables is counted as an expense until it is paid. Then, it is counted as income.

The app must also be capable of showing cash flow.

The cash flow view can be filtered to show only the income and expenses during a certain time range. It can also be filtered to show only either income or expenses, or both.

In the cash flow view, the sum totals are presented above the transaction table.

The cash flow table must update in real time.

The are three types of user that may use the app: the business owner, the stock manager, the account manager, and the cashier.

The owner is given full control of the app.

The account manager may manage accounts. Account management include registering, deleting, editing, and viewing.

The stock manager may access features related to the  goods management as well as their availability. This includes all features related to transaction.

The cashier may access features related to selling transaction.
