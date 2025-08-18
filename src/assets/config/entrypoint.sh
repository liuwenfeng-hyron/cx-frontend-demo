#!/bin/sh

# check
if [ -z "$KEYCLOAK_URL" ] || [ -z "$KEYCLOAK_REALM" ] || [ -z "$KEYCLOAK_CLIENT_ID" ]; then
  echo "ERROR：HAS NOT SET KEYCLOAK_URL、KEYCLOAK_REALM 和 KEYCLOAK_CLIENT_ID ！"
  echo "   CURRTY VALUE:"
  echo "   KEYCLOAK_URL=$KEYCLOAK_URL"
  echo "   KEYCLOAK_REALM=$KEYCLOAK_REALM"
  echo "   KEYCLOAK_CLIENT_ID=$KEYCLOAK_CLIENT_ID"
  exit 1
fi

TEMPLATE_PATH="/usr/share/nginx/html/assets/config/app.config.json"
# replace word
sed \
  -e "s|{{COUNTER_PARTY_ADDRESS}}|$COUNTER_PARTY_ADDRESS|g" \
  -e "s|{{COUNTER_PARTY_ID}}|$COUNTER_PARTY_ID|g" \
  -e "s|{{KEYCLOAK_URL}}|$KEYCLOAK_URL|g" \
  -e "s|{{KEYCLOAK_REALM}}|$KEYCLOAK_REALM|g" \
  -e "s|{{KEYCLOAK_CLIENT_ID}}|$KEYCLOAK_CLIENT_ID|g" \
  "$TEMPLATE_PATH" > "$TEMPLATE_PATH.tmp" && mv "$TEMPLATE_PATH.tmp" "$TEMPLATE_PATH"

TEMPLATE_PATH="/etc/nginx/nginx.conf"
# replace word
sed \
  -e "s|{{EDC_HOST}}|$EDC_HOST|g" \
  -e "s|{{BACK_END_HOST}}|$BACK_END_HOST|g" \
  "$TEMPLATE_PATH" > "$TEMPLATE_PATH.tmp" && mv "$TEMPLATE_PATH.tmp" "$TEMPLATE_PATH"

# run nginx
exec nginx -g 'daemon off;'