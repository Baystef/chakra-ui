"use client"

import {
  type CheckboxCardRootProps,
  For,
  Span,
  Stack,
  Text,
  useSlotRecipe,
} from "@chakra-ui/react"
import { colorPalettes } from "compositions/lib/color-palettes"
import { PlaygroundTable } from "compositions/lib/playground-table"
import {
  CheckboxCardControl,
  CheckboxCardLabel,
  CheckboxCardRoot,
} from "compositions/ui/checkbox-card"

export const CheckboxCardVariantTable = () => {
  const recipe = useSlotRecipe({ key: "checkboxCard" })
  return (
    <PlaygroundTable>
      <thead>
        <tr>
          <td />
          <For each={recipe.variantMap.variant}>
            {(v) => <td key={v}>{v}</td>}
          </For>
        </tr>
      </thead>
      <tbody>
        <For each={colorPalettes}>
          {(c) => (
            <tr key={c}>
              <td>
                <Span fontSize="sm" color="fg.subtle" minW="8ch">
                  {c}
                </Span>
              </td>
              <For each={recipe.variantMap.variant}>
                {(v) => (
                  <td key={v}>
                    <Stack gap="4">
                      <DemoCheckboxCard variant={v} colorPalette={c} />
                      <DemoCheckboxCard
                        variant={v}
                        colorPalette={c}
                        defaultChecked
                      />
                      <DemoCheckboxCard
                        variant={v}
                        colorPalette={c}
                        defaultChecked
                        disabled
                      />
                    </Stack>
                  </td>
                )}
              </For>
            </tr>
          )}
        </For>
      </tbody>
    </PlaygroundTable>
  )
}

const DemoCheckboxCard = (props: CheckboxCardRootProps) => {
  return (
    <CheckboxCardRoot maxW="240px" {...props}>
      <CheckboxCardControl>
        <Stack gap="0" flex="1">
          <CheckboxCardLabel>Next.js</CheckboxCardLabel>
          <Text color="fg.subtle">Best for apps</Text>
        </Stack>
      </CheckboxCardControl>
    </CheckboxCardRoot>
  )
}
