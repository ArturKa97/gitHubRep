package com.example.Backend.configuration;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;
import org.springframework.validation.annotation.Validated;

@Data
@Validated
@Component
@ConfigurationProperties(prefix = "nutrition.jwt")
public class JwtProperties {
    private long validTimeInSeconds = 1800;

    @NotBlank
    private String secretKey;

    public long getValidTimeInMillis() {
        return validTimeInSeconds * 1000;
    }

    public byte[] getSecretKeyAsBytes() {
        return secretKey.getBytes();
    }
}
