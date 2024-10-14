---
title: Access Dev API guide
description: How to access Access Protocol Dev API endpoints
---

The Access Dev API is less stable and more likely to change often than the Access API.
In order to communiate with access Dev API endpoints you'll need a JWT token signed by us that acts as your API key.

## Get your JWT token

1. Visit ["HUB"](https://hub.accessprotocol.co/)
2. Login with your creator's wallet
3. Navigate to ["Pool profile > API key"](https://hub.accessprotocol.co/en/profile/pool)

![Creators Dashboard Screenshot](../../../assets/api/creators_dashboard/navigation.jpg)

4. Click "Copy" button on API key field:

![API key Screenshot](../../../assets/api/creators_dashboard/api_key_field.jpg)

5. Click copy button that will copy the JWT token into your clipboard

This token never expires so be careful where and with whom you share it. It should stay as secure as possible and never be included in any client-side code.

## Example request

You can test your JWT token using `curl` from the command line (replace `--KEY--` with the actual token):

```bash
export ACS_API_KEY=--KEY--
curl https://go-api.accessprotocol.co/user \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $ACS_API_KEY"
```

and as output you should see something like this:
```json
{"EnabledEmailAutoSubs":false,"Pubkey":"7Q34nmDP1srbYSQJH5b43heZpPtsssiRZa17hLnx5Gqx","Role":"admin","OwnedPool":{"Pubkey":"2hQSDVwJLbtwHzi3CKj8pmiQzLyfKZs5ZDhT1QZdHXv3","Name":"Telegram","Benefits":"","Description":"Telegram test pool","Website":"https://accessprotocol.co","Email":"ladi@accessprotocol.co","LogoImageURL":"https://ap-staging.fra1.digitaloceanspaces.com/d8760345-fdf1-11ed-bd11-8e0f9ac77f3d","HeroImageURL":"https://ap-staging.fra1.digitaloceanspaces.com/d87bf5d3-fdf1-11ed-bd11-8e0f9ac77f3d","ProfileImageURL":"https://ap-staging.fra1.digitaloceanspaces.com/d8677cc6-fdf1-11ed-bd11-8e0f9ac77f3d","UserPubkey":"7Q34nmDP1srbYSQJH5b43heZpPtsssiRZa17hLnx5Gqx","CollectEmails":false,"DisplayFE":true,"CreatedAt":"2023-05-29T09:24:27.966677+02:00","UpdatedAt":"2023-05-29T09:24:27.969427+02:00"},"Username":"7Q34...5Gqx","CreatedAt":"2023-05-29T09:22:52.411033+02:00","UpdatedAt":"2023-05-29T09:22:52.411033+02:00"}
```
