export * from './lib/service';
export * from './lib/pipe';
import { NgModule, ModuleWithProviders, Provider } from '@angular/core';
import { TranslatePipe } from './lib/pipe';
import { TranslatePartPipe } from './lib/translate-part.pipe';
import { TranslateChunkPipe } from './lib/translate-chunk.pipe';
import { TranslateService } from './lib/service';

export type Translations = {
  [name: string]: string
};

export function translationsFactory() { return {}; }

@NgModule({
  declarations: [TranslatePipe, TranslatePartPipe, TranslateChunkPipe],
  exports: [TranslatePipe, TranslatePartPipe, TranslateChunkPipe]
})
export class TranslateModule {
  static forRoot(
    providedTranslations: Provider = { provide: 'translations', useFactory: translationsFactory }
  ): ModuleWithProviders<TranslateModule> {
    return {
      ngModule: TranslateModule,
      providers: [TranslateService, providedTranslations]
    };
  }
}
